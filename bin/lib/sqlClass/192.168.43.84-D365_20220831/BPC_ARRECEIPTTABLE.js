const Database = require('../Database');

class BPC_ARRECEIPTTABLE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_ARRECEIPTTABLE';
        this.column = {
            "CONNTACTNAME": {"dataType": "nvarchar", "maxLength":"150"},"CUSTOMERNO": {"dataType": "nvarchar", "maxLength":"20"},"DUEDATE": {"dataType": "datetime", "maxLength":"null"},"NAME": {"dataType": "nvarchar", "maxLength":"150"},"PAYMTERMID": {"dataType": "nvarchar", "maxLength":"100"},"RECEIPTDATE": {"dataType": "datetime", "maxLength":"null"},"RECEIPTNO": {"dataType": "nvarchar", "maxLength":"40"},"REFERENCENO": {"dataType": "nvarchar", "maxLength":"20"},"REMARK": {"dataType": "nvarchar", "maxLength":"-1"},"TAXGROUP": {"dataType": "nvarchar", "maxLength":"10"},"PAYMENTBY": {"dataType": "int", "maxLength":"null"},"BANKBRANCH": {"dataType": "nvarchar", "maxLength":"150"},"BANKCHQDATE": {"dataType": "datetime", "maxLength":"null"},"BANKCHEQUENUM": {"dataType": "nvarchar", "maxLength":"20"},"BANKACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"BANKCURRENCYAMOUNT": {"dataType": "numeric", "maxLength":"null"},"BANKBRANCH2": {"dataType": "nvarchar", "maxLength":"150"},"BANKCHQDATE2": {"dataType": "datetime", "maxLength":"null"},"BANKCHEQUENUM2": {"dataType": "nvarchar", "maxLength":"20"},"BANKACCOUNTID2": {"dataType": "nvarchar", "maxLength":"10"},"BANKCURRENCYAMOUNT2": {"dataType": "numeric", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"MODIFIEDTRANSACTIONID": {"dataType": "bigint", "maxLength":"null"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDTRANSACTIONID": {"dataType": "bigint", "maxLength":"null"},"PAYMCREDITCARDNO": {"dataType": "nvarchar", "maxLength":"30"}
        };
    }
}

module.exports = BPC_ARRECEIPTTABLE;