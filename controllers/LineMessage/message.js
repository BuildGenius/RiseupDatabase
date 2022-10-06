var message_creator = require('./message_creator');
var message_receipt = require('./message_receipt');
var { LineClient } = require('messaging-api-line');

class message {
    constructor (options) {
        var receipt = new message_receipt;
        var creator = new message_creator;
        this.accessToken = options.accessToken;
        this.channelSecret = options.channelSecret;
        this.createClientMessage();

        return this;
    }
    async sendText(userID, text) {
        this.msg.pushText(userID, text);
    }
    createClientMessage() {
        this.msg = new LineClient({
            accessToken: this.accessToken,
            channelSecret: this.channelSecret
        });

        return this;
    }
}

module.exports = message;