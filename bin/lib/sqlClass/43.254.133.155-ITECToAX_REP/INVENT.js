const Database = require('../Database');

class INVENT extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'INVENT';
        this.column = {
            
        };
    }
}

module.exports = INVENT;