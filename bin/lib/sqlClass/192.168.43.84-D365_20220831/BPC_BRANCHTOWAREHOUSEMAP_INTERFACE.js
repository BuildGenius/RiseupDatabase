const Database = require('../Database');

class BPC_BRANCHTOWAREHOUSEMAP_INTERFACE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BRANCHTOWAREHOUSEMAP_INTERFACE';
        this.column = {
            "BRANCHID": {"dataType": "int", "maxLength":"null"},"INVENTLOCATIONID": {"dataType": "nvarchar", "maxLength":"10"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BRANCHTOWAREHOUSEMAP_INTERFACE;