const Database = require('../Database');

class BPC_ARRECEIPTLINES extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_ARRECEIPTLINES';
        this.column = {
            "BILLLINERECID": {"dataType": "bigint", "maxLength":"null"},"DUEDATE": {"dataType": "datetime", "maxLength":"null"},"INVOICEDATE": {"dataType": "datetime", "maxLength":"null"},"INVOICENO": {"dataType": "nvarchar", "maxLength":"40"},"INVOICERECIDRF": {"dataType": "bigint", "maxLength":"null"},"RECEIPTAMOUNT": {"dataType": "numeric", "maxLength":"null"},"RECEIPTCLOSE": {"dataType": "int", "maxLength":"null"},"RECEIPTNO": {"dataType": "nvarchar", "maxLength":"40"},"RECEIPTTABLERECID": {"dataType": "bigint", "maxLength":"null"},"TYPERECEIPT": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_ARRECEIPTLINES;