const Database = require('../Database');

class BPC_BRANCHGRADESTAGING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BRANCHGRADESTAGING';
        this.column = {
            "DEFINITIONGROUP": {"dataType": "nvarchar", "maxLength":"60"},"EXECUTIONID": {"dataType": "nvarchar", "maxLength":"90"},"ISSELECTED": {"dataType": "int", "maxLength":"null"},"TRANSFERSTATUS": {"dataType": "int", "maxLength":"null"},"BRANCHGRADE": {"dataType": "nvarchar", "maxLength":"20"},"DESCRIPTION": {"dataType": "nvarchar", "maxLength":"60"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BRANCHGRADESTAGING;