var express = require("express");
const { DateTime } = require("mssql");
var router = express.Router();
var authRouter = require('./auth');
var line = require('../bin/lib/linesFunction/Line');
// const { Line } = require("messaging-api-line");
var lineClient = new line({
    "DP": async (messageText) => {
        let message = messageText.toUpperCase().replace(/DP/gm, '');
        let id = message.split('-')[0];
        let branch = message.split('-')[1];

        var ReceiptDeposit = require('../sqlClass/43.254.133.155-ITECToAX_REP/ReceiptDeposit');
        var config = require('../../../configuration.json').ITECToAX_REP;
        var rv = new ReceiptDeposit(config);

        var result = await rv.select('TransactionID').where('DepositID', id).where('DepositBranch', branch).get();

        let replyMessage = "";
        for (let i = 0;i < result.length;i++) {
            replyMessage += `TransactionID: ${Object.values(result[i])[0]}\r\n`;
        }

        return replyMessage;
    },
    "TIMESHEET": "ADDNEWTIMESHEET",
    "NOTE": "ADDNEWNOTE",
    "ASSIGN": "ADDNEWJOB",
    "ACHIEVEMENT": "GETWEEKLYARCHIVEMENT"
});

router.use('/auth', authRouter);

router.post('/lineCall', async (req, res) => {
    let data = req.body
    let destination = data.destination;
    let response;

    if (Object.values(data.events).length != 0) {
        for (let i = 0;i < Object.values(data.events).length;i++) {
            let events = data.events[i];

            switch (data.events[i].type) {
                case 'message' :
                    let messageType = events.message.type;
                    
                    if (messageType == 'text') {
                        let messageId = events.message.id;
                        let messageText = events.message.text;
                        let timestamp = new Date(events.timestamp);
                        let userId = events.source.userId;
                        let replyToken = events.replyToken;

                        lineClient.sendType = data.events[i].type;
                        lineClient.messageId = messageId;
                        lineClient.messageText = messageText;
                        lineClient.timestamp = timestamp;
                        lineClient.userId = userId;
                        lineClient.replyToken = replyToken;

                        // lineClient.do();
                    } 
                break;
                case 'follow' :
                break;
                case 'unfollow' :
                break;
                case 'unsend' :
                break;
                case 'join' :
                break;
                case 'leave' :
                break;
                case 'memberJoined' :
                break;
                case 'memberLeft' :
                break;
                case 'postback' :
                break;
                case 'videoPlayComplete' :
                break;
                case 'beacon' :
                break;
                case 'accountLink' :
                break;
            }
        }
    } else {
        response = {status: 200, message: 'this is test line api. thanks'}
        console.log(response);
    }

    res.json(response);
});

module.exports = router;