const Database = require('../Database');

class BPC_BANKCODESTAGING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKCODESTAGING';
        this.column = {
            "DEFINITIONGROUP": {"dataType": "nvarchar", "maxLength":"60"},"EXECUTIONID": {"dataType": "nvarchar", "maxLength":"90"},"ISSELECTED": {"dataType": "int", "maxLength":"null"},"TRANSFERSTATUS": {"dataType": "int", "maxLength":"null"},"BANKCODE": {"dataType": "nvarchar", "maxLength":"3"},"BANKNAME": {"dataType": "nvarchar", "maxLength":"150"},"BRANCHCODE": {"dataType": "nvarchar", "maxLength":"4"},"BRANCHNAME": {"dataType": "nvarchar", "maxLength":"150"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKCODESTAGING;