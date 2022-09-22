const Database = require('../Database');

class BPC_BANKRECONCILIATIONMATCHING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONMATCHING';
        this.column = {
            "BANKRECONCILIATIONHEADER": {"dataType": "bigint", "maxLength":"null"},"CANCELLED": {"dataType": "int", "maxLength":"null"},"CANCELLEDBY": {"dataType": "nvarchar", "maxLength":"20"},"CANCELLEDDATE": {"dataType": "datetime", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONMATCHING;