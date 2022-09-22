const Database = require('../Database');

class BPC_BANKRECONCILIATIONACCOUNTTRANSMATCHED extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONACCOUNTTRANSMATCHED';
        this.column = {
            "BANKACCOUNTTRANSREFRECID": {"dataType": "bigint", "maxLength":"null"},"RECONCILED": {"dataType": "int", "maxLength":"null"},"ISMATCHED": {"dataType": "int", "maxLength":"null"},"ACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"ISMATCHED_LS": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"AMOUNTCURCREDIT": {"dataType": "numeric", "maxLength":"null"},"BANKRECONCILETYPE": {"dataType": "int", "maxLength":"null"},"LEDGERJOURNALTRANSREFRECID": {"dataType": "bigint", "maxLength":"null"},"SOURCETABLEID": {"dataType": "int", "maxLength":"null"},"BANKRECACCTRANSMATCHEDREFRECID": {"dataType": "bigint", "maxLength":"null"},"RECONCILED_LS": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONACCOUNTTRANSMATCHED;