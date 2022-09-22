const Database = require('../Database');

class BPC_BILLPAYMENTTABLE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BILLPAYMENTTABLE';
        this.column = {
            "REFERENCENO1": {"dataType": "nvarchar", "maxLength":"40"},"REFERENCENO2": {"dataType": "nvarchar", "maxLength":"40"},"AMOUNTCUR": {"dataType": "numeric", "maxLength":"null"},"TRANSDATE": {"dataType": "datetime", "maxLength":"null"},"ACCOUNTNUM": {"dataType": "nvarchar", "maxLength":"20"},"PAYMENTCONFIRM": {"dataType": "int", "maxLength":"null"},"JOURNALID": {"dataType": "nvarchar", "maxLength":"40"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"SYSROWVERSIONNUMBER": {"dataType": "timestamp", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BILLPAYMENTTABLE;