const Database = require('../Database');

class SubCategory extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SubCategory';
        this.column = {
            
        };
    }
}

module.exports = SubCategory;