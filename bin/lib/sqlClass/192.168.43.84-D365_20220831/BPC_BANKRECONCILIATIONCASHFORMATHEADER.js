const Database = require('../Database');

class BPC_BANKRECONCILIATIONCASHFORMATHEADER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONCASHFORMATHEADER';
        this.column = {
            "EXCELFORMAT": {"dataType": "nvarchar", "maxLength":"20"},"NAME": {"dataType": "nvarchar", "maxLength":"150"},"ROW_": {"dataType": "int", "maxLength":"null"},"KEYINDEX": {"dataType": "int", "maxLength":"null"},"KEYVALUE": {"dataType": "nvarchar", "maxLength":"40"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONCASHFORMATHEADER;