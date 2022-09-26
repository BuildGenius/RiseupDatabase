const base = require('./base.controllers');

class index extends base {
    constructor (params) {
        this.title = 'Home';
        this.active_menu = 'Home';

        super(params);        
    }
    index(req) {
        return new index(req);
    }
    
}

module.exports = index;