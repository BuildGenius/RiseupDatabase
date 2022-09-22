const Database = require('../Database');

class BPC_ARBILLLINES extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_ARBILLLINES';
        this.column = {
            "BILLAMOUNT": {"dataType": "numeric", "maxLength":"null"},"BILLAMOUNTBF": {"dataType": "numeric", "maxLength":"null"},"BILLCLOSE": {"dataType": "int", "maxLength":"null"},"BILLNO": {"dataType": "nvarchar", "maxLength":"40"},"BILLRECEIPT": {"dataType": "int", "maxLength":"null"},"BILLTABLERECID": {"dataType": "bigint", "maxLength":"null"},"BILLTAXAMOUNT": {"dataType": "numeric", "maxLength":"null"},"CUSTOMERNO": {"dataType": "nvarchar", "maxLength":"20"},"DUEDATE": {"dataType": "datetime", "maxLength":"null"},"INVOICEDATE": {"dataType": "datetime", "maxLength":"null"},"INVOICENO": {"dataType": "nvarchar", "maxLength":"40"},"INVOICERECIDRF": {"dataType": "bigint", "maxLength":"null"},"MARK": {"dataType": "int", "maxLength":"null"},"MARKAMOUNT": {"dataType": "numeric", "maxLength":"null"},"RECEIPTAMOUNT": {"dataType": "numeric", "maxLength":"null"},"RECEIPTREMAMOUNT": {"dataType": "numeric", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_ARBILLLINES;