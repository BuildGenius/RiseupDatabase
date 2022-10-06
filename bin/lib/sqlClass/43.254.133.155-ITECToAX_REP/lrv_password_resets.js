const Database = require('../Database');

class lrv_password_resets extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_password_resets';
        this.column = {
            
        };
    }
}

module.exports = lrv_password_resets;