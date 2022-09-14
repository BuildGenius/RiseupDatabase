const Database = require('../Database');

class term extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'term';
        this.column = {
            
        };
    }
}

module.exports = term;