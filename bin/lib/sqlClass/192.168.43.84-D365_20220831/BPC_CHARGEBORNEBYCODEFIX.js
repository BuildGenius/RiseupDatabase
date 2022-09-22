const Database = require('../Database');

class BPC_CHARGEBORNEBYCODEFIX extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_CHARGEBORNEBYCODEFIX';
        this.column = {
            "BPC_CHARGEBORNEBY": {"dataType": "int", "maxLength":"null"},"CODEFIX": {"dataType": "nvarchar", "maxLength":"10"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"BANKGROUPID": {"dataType": "nvarchar", "maxLength":"10"}
        };
    }
}

module.exports = BPC_CHARGEBORNEBYCODEFIX;