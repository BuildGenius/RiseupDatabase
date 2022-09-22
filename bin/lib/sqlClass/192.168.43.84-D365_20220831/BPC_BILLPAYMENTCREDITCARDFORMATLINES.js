const Database = require('../Database');

class BPC_BILLPAYMENTCREDITCARDFORMATLINES extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BILLPAYMENTCREDITCARDFORMATLINES';
        this.column = {
            "EXCELFORMAT": {"dataType": "nvarchar", "maxLength":"20"},"ELEMENT": {"dataType": "int", "maxLength":"null"},"COLUMN_": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BILLPAYMENTCREDITCARDFORMATLINES;