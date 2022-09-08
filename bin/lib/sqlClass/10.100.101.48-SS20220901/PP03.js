const Database = require('../Database');

class PP03 extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'PP03';
        this.column = {
            "ID": {"dataType": "bigint", "maxLength":"null"},"CategoryID": {"dataType": "int", "maxLength":"null"},"SubCat": {"dataType": "varchar", "maxLength":"100"},"Brand": {"dataType": "varchar", "maxLength":"50"},"Number": {"dataType": "int", "maxLength":"null"},"Price": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = PP03;