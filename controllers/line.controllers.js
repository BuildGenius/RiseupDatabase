var base = require('./base.controllers');
const message = require('./LineMessage/message');
const config_line = require('../configuration-line.json');

class line extends base {
    constructor(params, env = 'development') {
        super(params);

        this.msg = new message({
            accessToken: config_line[env].accessToken,
            channelSecret: config_line[env].channelSecret
        });
    }
    
}

module.exports = line;