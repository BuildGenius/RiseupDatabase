const Database = require('../Database');

class BPC_BILLPAYMENTPARAMETERAPI extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BILLPAYMENTPARAMETERAPI';
        this.column = {
            "NUMBERSEQUENCECODE": {"dataType": "nvarchar", "maxLength":"10"},"JOURNALNAME": {"dataType": "nvarchar", "maxLength":"10"},"MAINACCOUNTID": {"dataType": "nvarchar", "maxLength":"20"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"SYSROWVERSIONNUMBER": {"dataType": "timestamp", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BILLPAYMENTPARAMETERAPI;