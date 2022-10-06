const Database = require('../Database');

class lrv_user_token extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_user_token';
        this.column = {
            
        };
    }
}

module.exports = lrv_user_token;