const Database = require('../Database');

class TASK extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'TASK';
        this.column = {
            
        };
    }
}

module.exports = TASK;