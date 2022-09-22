const Database = require('../Database');

class BPC_BANKRECONCILIATIONCASHFORMATLINES extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONCASHFORMATLINES';
        this.column = {
            "EXCELFORMAT": {"dataType": "nvarchar", "maxLength":"20"},"ELEMENT": {"dataType": "int", "maxLength":"null"},"COLUMN_": {"dataType": "int", "maxLength":"null"},"KEYVALUE": {"dataType": "nvarchar", "maxLength":"40"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONCASHFORMATLINES;