const Database = require('../Database');

class BPC_BANKACCOUNTMAPPARM_INTERFACE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKACCOUNTMAPPARM_INTERFACE';
        this.column = {
            "TRANSFERBANKID": {"dataType": "int", "maxLength":"null"},"TRANSFERBANKNAME": {"dataType": "nvarchar", "maxLength":"200"},"BANKACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKACCOUNTMAPPARM_INTERFACE;