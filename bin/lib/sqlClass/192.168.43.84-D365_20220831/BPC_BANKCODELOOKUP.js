const Database = require('../Database');

class BPC_BANKCODELOOKUP extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKCODELOOKUP';
        this.column = {
            "BANKNAME": {"dataType": "nvarchar", "maxLength":"150"},"REFLEDGERJOURNALTRANS": {"dataType": "bigint", "maxLength":"null"},"VENDBANKACCOUNT": {"dataType": "bigint", "maxLength":"null"},"BANKCODES": {"dataType": "bigint", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"}
        };
    }
}

module.exports = BPC_BANKCODELOOKUP;