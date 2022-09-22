const Database = require('../Database');

class BPC_BANKTAXWITHHOLDPAYMENT extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKTAXWITHHOLDPAYMENT';
        this.column = {
            "BANKGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"BPC_WHTPAYMET": {"dataType": "int", "maxLength":"null"},"CODE": {"dataType": "nvarchar", "maxLength":"1"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKTAXWITHHOLDPAYMENT;