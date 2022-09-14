const Database = require('../Database');

class SubCat extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SubCat';
        this.column = {
            
        };
    }
}

module.exports = SubCat;