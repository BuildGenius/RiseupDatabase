const Database = require('../Database');

class BPC_BILLPAYMENTFORMATHEADER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BILLPAYMENTFORMATHEADER';
        this.column = {
            "EXCELFORMAT": {"dataType": "nvarchar", "maxLength":"20"},"NAME": {"dataType": "nvarchar", "maxLength":"150"},"ROW_": {"dataType": "int", "maxLength":"null"},"BANKACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"KEYINDEX": {"dataType": "int", "maxLength":"null"},"KEYVALUE": {"dataType": "nvarchar", "maxLength":"40"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"BANKTRANSTYPE": {"dataType": "nvarchar", "maxLength":"10"}
        };
    }
}

module.exports = BPC_BILLPAYMENTFORMATHEADER;