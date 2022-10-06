const Database = require('../Database');

class lrv_migrations extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_migrations';
        this.column = {
            
        };
    }
}

module.exports = lrv_migrations;