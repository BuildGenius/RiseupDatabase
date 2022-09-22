const Database = require('../Database');

class BPC_BANKACCOUNTRECONCILIATIONFORMATMAP extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKACCOUNTRECONCILIATIONFORMATMAP';
        this.column = {
            "BANKACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"EXCELFORMATBANKCASH": {"dataType": "nvarchar", "maxLength":"20"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKACCOUNTRECONCILIATIONFORMATMAP;