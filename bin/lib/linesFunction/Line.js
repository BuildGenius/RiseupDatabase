const { LineClient } = require('messaging-api-line');
const line = new LineClient({
    accessToken: 'fDlox1shrxTaCZJnFaNl55aVNDh/M1fxAL59kJ/a3ZI3ATi5EU1fu5jKJvLRQMGB0ffLFAzhQ6uOY7Jqy2MprwtWXr7pCbJ7fTfeuZ9CNHG/nHz+4RwyfccMyXeI8gas2XJSmoEK0DE9NGC5paKeZwdB04t89/1O/w1cDnyilFU=',
    channelSecret: '104a6fa81b58e4eb79ecc51fc0dd0230'
});

class Line {
    constructor(setupLineFunction) {
        this.sendType = "";
        this.messageType = "";
        this.messageText = "";
        this.timestamp = "";
        this.userId = "";
        this.replyToken = "";
        this.LineFunction = setupLineFunction;
    }
    async do() {
        for (let i = 0;i < Object.keys(this.LineFunction).length;i++) {
            let regex = new RegExp(Object.keys(this.LineFunction)[i], 'gm');

            if (regex.exec(this.messageText.toUpperCase()) !== null) {
                await this[Object.values(this.LineFunction)[i]]();
                this.sendMessage();
            }
        }
    }
    async fixedReceiptDeposit () {
        let message = this.messageText.toUpperCase().replace(/DP/gm, '');
        let id = message.split('-')[0];
        let branch = message.split('-')[1];

        var ReceiptDeposit = require('../sqlClass/43.254.133.155-ITECToAX_REP/ReceiptDeposit');
        var config = require('../../../configuration.json').ITECToAX_REP;
        var rv = new ReceiptDeposit(config);

        var result = await rv.select('TransactionID').where('DepositID', id).where('DepositBranch', branch).get();

        this.replyMessage = "";
        for (let i = 0;i < result.length;i++) {
            this.replyMessage += `TransactionID: ${Object.values(result[i])[0]}\r\n`;
        }

        return this;
    }
    sendMessage() {
        line.replyText(this.replyToken, this.replyMessage);
    }
}

module.exports = Line