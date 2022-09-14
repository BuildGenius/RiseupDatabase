const Database = require('../Database');

class DERIVEDDIMENSION extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'DERIVEDDIMENSION';
        this.column = {
            
        };
    }
}

module.exports = DERIVEDDIMENSION;