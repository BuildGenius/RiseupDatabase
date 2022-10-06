const Database = require('../Database');

class lrv_users extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_users';
        this.column = {
            
        };
    }
}

module.exports = lrv_users;