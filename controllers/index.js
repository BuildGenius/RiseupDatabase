const base = require('./base.controller');

class index extends base {
    constructor (params) {
        super(params);
    }
    static index(req) {
        return new index(req);
    }
}

module.exports = index