const Database = require('../Database');

class BPC_BRANCHGROUP extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BRANCHGROUP';
        this.column = {
            "BRANCHGROUP": {"dataType": "nvarchar", "maxLength":"20"},"DESCRIPTION": {"dataType": "nvarchar", "maxLength":"60"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BRANCHGROUP;