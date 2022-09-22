const Database = require('../Database');

class BPC_BRANCHFORMOVEMENTPARM_INTERFACE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BRANCHFORMOVEMENTPARM_INTERFACE';
        this.column = {
            "PRIORITYNUM": {"dataType": "int", "maxLength":"null"},"BRANCHID": {"dataType": "int", "maxLength":"null"},"DOCTYPE": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BRANCHFORMOVEMENTPARM_INTERFACE;