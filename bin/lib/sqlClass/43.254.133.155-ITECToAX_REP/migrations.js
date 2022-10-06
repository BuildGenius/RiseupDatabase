const Database = require('../Database');

class migrations extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'migrations';
        this.column = {
            
        };
    }
}

module.exports = migrations;