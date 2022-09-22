const Database = require('../Database');

class BPC_BANKTAXWITHHOLDTYPE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKTAXWITHHOLDTYPE';
        this.column = {
            "BANKGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"TAXWITHHOLDGROUP": {"dataType": "nvarchar", "maxLength":"10"},"BPC_TAXWITHHOLDFROMTYPEID": {"dataType": "bigint", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKTAXWITHHOLDTYPE;