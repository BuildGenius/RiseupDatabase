const Database = require('../Database');

class BPC_BRANCHGROUPSTAGING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BRANCHGROUPSTAGING';
        this.column = {
            "DEFINITIONGROUP": {"dataType": "nvarchar", "maxLength":"60"},"EXECUTIONID": {"dataType": "nvarchar", "maxLength":"90"},"ISSELECTED": {"dataType": "int", "maxLength":"null"},"TRANSFERSTATUS": {"dataType": "int", "maxLength":"null"},"BRANCHGROUP": {"dataType": "nvarchar", "maxLength":"20"},"DESCRIPTION": {"dataType": "nvarchar", "maxLength":"60"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BRANCHGROUPSTAGING;