const Database = require('../Database');

class PP04 extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'PP04';
        this.column = {
            "ID": {"dataType": "bigint", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Number": {"dataType": "int", "maxLength":"null"},"Price": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = PP04;