const Database = require('../Database');

class BPC_ARBILLTABLE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_ARBILLTABLE';
        this.column = {
            "BILLDATE": {"dataType": "datetime", "maxLength":"null"},"BILLNO": {"dataType": "nvarchar", "maxLength":"40"},"CONNTACTNAME": {"dataType": "nvarchar", "maxLength":"150"},"CUSTOMERNO": {"dataType": "nvarchar", "maxLength":"20"},"CYCLEBILLING": {"dataType": "nvarchar", "maxLength":"60"},"DUEDATE": {"dataType": "datetime", "maxLength":"null"},"EMPLID": {"dataType": "nvarchar", "maxLength":"20"},"LINEBILLINGID": {"dataType": "nvarchar", "maxLength":"15"},"MARK": {"dataType": "int", "maxLength":"null"},"NAME": {"dataType": "nvarchar", "maxLength":"150"},"PAYMTERMID": {"dataType": "nvarchar", "maxLength":"100"},"RECEIPTDATE": {"dataType": "datetime", "maxLength":"null"},"REFERENCENO": {"dataType": "nvarchar", "maxLength":"20"},"REMARK": {"dataType": "nvarchar", "maxLength":"-1"},"STATUS": {"dataType": "int", "maxLength":"null"},"TAXGROUP": {"dataType": "nvarchar", "maxLength":"10"},"LINEBILLING": {"dataType": "nvarchar", "maxLength":"150"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MODIFIEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"MODIFIEDBY": {"dataType": "nvarchar", "maxLength":"20"},"MODIFIEDTRANSACTIONID": {"dataType": "bigint", "maxLength":"null"},"CREATEDDATETIME": {"dataType": "datetime", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CREATEDTRANSACTIONID": {"dataType": "bigint", "maxLength":"null"}
        };
    }
}

module.exports = BPC_ARBILLTABLE;