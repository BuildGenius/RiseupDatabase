const Database = require('../Database');

class NOTE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'NOTE';
        this.column = {
            
        };
    }
}

module.exports = NOTE;