const Database = require('../Database');

class BPC_BANKCODELOOKUPBASESTAGING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKCODELOOKUPBASESTAGING';
        this.column = {
            "DEFINITIONGROUP": {"dataType": "nvarchar", "maxLength":"60"},"EXECUTIONID": {"dataType": "nvarchar", "maxLength":"90"},"ISSELECTED": {"dataType": "int", "maxLength":"null"},"TRANSFERSTATUS": {"dataType": "int", "maxLength":"null"},"BANKNAME": {"dataType": "nvarchar", "maxLength":"150"},"VENDBANKACCOUNT_ACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"VENDBANKACCOUNT_VENDACCOUNT": {"dataType": "nvarchar", "maxLength":"20"},"BPC_BANKCODE_BANKCODE": {"dataType": "nvarchar", "maxLength":"3"},"BPC_BANKCODE_BRANCHCODE": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKCODELOOKUPBASESTAGING;