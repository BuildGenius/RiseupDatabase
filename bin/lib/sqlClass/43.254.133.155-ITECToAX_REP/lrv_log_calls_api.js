const Database = require('../Database');

class lrv_log_calls_api extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_log_calls_api';
        this.column = {
            
        };
    }
}

module.exports = lrv_log_calls_api;