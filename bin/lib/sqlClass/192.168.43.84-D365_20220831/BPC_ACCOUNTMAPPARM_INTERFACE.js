const Database = require('../Database');

class BPC_ACCOUNTMAPPARM_INTERFACE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_ACCOUNTMAPPARM_INTERFACE';
        this.column = {
            "ACCOUNTCODE": {"dataType": "nvarchar", "maxLength":"100"},"MAINACCOUNTID": {"dataType": "nvarchar", "maxLength":"20"},"DEFAULTDIMENSION": {"dataType": "bigint", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_ACCOUNTMAPPARM_INTERFACE;