const Database = require('../Database');

class BPC_BANKRECONCILIATIONCASHPARAMETER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONCASHPARAMETER';
        this.column = {
            "NUMBERSEQUENCECODE": {"dataType": "nvarchar", "maxLength":"10"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"NUMBERSEQUENCECODECREDIT": {"dataType": "nvarchar", "maxLength":"10"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONCASHPARAMETER;