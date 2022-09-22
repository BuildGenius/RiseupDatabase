const Database = require('../Database');

class BPC_BANKCODE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKCODE';
        this.column = {
            "BANKCODE": {"dataType": "nvarchar", "maxLength":"3"},"BANKNAME": {"dataType": "nvarchar", "maxLength":"150"},"BRANCHCODE": {"dataType": "nvarchar", "maxLength":"4"},"BRANCHNAME": {"dataType": "nvarchar", "maxLength":"150"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"}
        };
    }
}

module.exports = BPC_BANKCODE;