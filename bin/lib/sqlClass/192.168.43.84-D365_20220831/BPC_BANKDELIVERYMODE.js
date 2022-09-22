const Database = require('../Database');

class BPC_BANKDELIVERYMODE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKDELIVERYMODE';
        this.column = {
            "TYPECODE": {"dataType": "nvarchar", "maxLength":"15"},"DESCRIPTION": {"dataType": "nvarchar", "maxLength":"60"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDTRANSACTIONID": {"dataType": "bigint", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKDELIVERYMODE;