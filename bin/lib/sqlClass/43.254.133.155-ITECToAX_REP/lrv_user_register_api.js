const Database = require('../Database');

class lrv_user_register_api extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_user_register_api';
        this.column = {
            
        };
    }
}

module.exports = lrv_user_register_api;