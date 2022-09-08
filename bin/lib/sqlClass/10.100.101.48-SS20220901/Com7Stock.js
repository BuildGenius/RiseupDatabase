const Database = require('../Database');

class Com7Stock extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Com7Stock';
        this.column = {
            "Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Number": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = Com7Stock;