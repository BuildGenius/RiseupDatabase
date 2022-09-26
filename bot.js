var bot = require('./controllers/autobot.controllers');
var message = require('./controllers/LineMessage/message');
var credentials = require('./configuration-line.json');
var cron = require('node-cron');

cron.schedule('1 1 9 * * * *', async () => {
    let autobot = new bot;
    let str = await autobot.chk_both_data_of_TempandRep();
    let msg = new message({
        accessToken: credentials.production.accessToken,
        channelSecret: credentials.production.channelSecret
    });

    msg.sendText(credentials.production['interface ItectoAx'], str);    
})
