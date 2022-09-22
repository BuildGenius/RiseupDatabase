const Database = require('../Database');

class BPC_BILLPAYMENTLINE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BILLPAYMENTLINE';
        this.column = {
            "BPC_BILLPAYMENTRECID": {"dataType": "bigint", "maxLength":"null"},"SALESID": {"dataType": "nvarchar", "maxLength":"40"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"SYSROWVERSIONNUMBER": {"dataType": "timestamp", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BILLPAYMENTLINE;