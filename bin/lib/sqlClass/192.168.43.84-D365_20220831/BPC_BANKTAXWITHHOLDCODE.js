const Database = require('../Database');

class BPC_BANKTAXWITHHOLDCODE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKTAXWITHHOLDCODE';
        this.column = {
            "BANKGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"TAXWITHHOLDCODE": {"dataType": "nvarchar", "maxLength":"10"},"INCOMETYPECODE": {"dataType": "nvarchar", "maxLength":"3"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"INCOMEDESCRIPTION": {"dataType": "nvarchar", "maxLength":"70"}
        };
    }
}

module.exports = BPC_BANKTAXWITHHOLDCODE;