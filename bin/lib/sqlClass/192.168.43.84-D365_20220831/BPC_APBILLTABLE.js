const Database = require('../Database');

class BPC_APBILLTABLE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_APBILLTABLE';
        this.column = {
            "BILLDATE": {"dataType": "datetime", "maxLength":"null"},"BILLNO": {"dataType": "nvarchar", "maxLength":"20"},"CONNTACTNAME": {"dataType": "nvarchar", "maxLength":"150"},"DUEDATE": {"dataType": "datetime", "maxLength":"null"},"MARK": {"dataType": "int", "maxLength":"null"},"NAME": {"dataType": "nvarchar", "maxLength":"150"},"PAYMTERMID": {"dataType": "nvarchar", "maxLength":"100"},"REFERENCENO": {"dataType": "nvarchar", "maxLength":"20"},"REMARK": {"dataType": "nvarchar", "maxLength":"-1"},"STATUS": {"dataType": "int", "maxLength":"null"},"VENDERNO": {"dataType": "nvarchar", "maxLength":"20"},"TAXGROUP": {"dataType": "nvarchar", "maxLength":"10"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_APBILLTABLE;