const base = require('./base.controllers');

class index extends base {
    constructor (params) {
        super(params);    
        this.title = 'Home';
        this.active_menu = 'home';

        this.authorized();
    }
}

module.exports = index;