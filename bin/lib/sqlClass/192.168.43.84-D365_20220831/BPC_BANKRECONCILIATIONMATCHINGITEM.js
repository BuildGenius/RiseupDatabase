const Database = require('../Database');

class BPC_BANKRECONCILIATIONMATCHINGITEM extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONMATCHINGITEM';
        this.column = {
            "BANKACCOUNTTRANS": {"dataType": "bigint", "maxLength":"null"},"BANKRECONCILIATIONMATCHING": {"dataType": "bigint", "maxLength":"null"},"BANKSTATEMENTENTRY": {"dataType": "bigint", "maxLength":"null"},"BANKRECONCILIATIONMATCHINGENTRYTYPE": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONMATCHINGITEM;