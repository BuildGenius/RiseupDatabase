const Database = require('../Database');

class CATEGORY extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CATEGORY';
        this.column = {
            
        };
    }
}

module.exports = CATEGORY;