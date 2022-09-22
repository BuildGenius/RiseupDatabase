const Database = require('../Database');

class BPC_BILLPAYMENTCREDITCARDPARAMETER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BILLPAYMENTCREDITCARDPARAMETER';
        this.column = {
            "NUMBERSEQUENCECODE": {"dataType": "nvarchar", "maxLength":"10"},"JOURNALNAME": {"dataType": "nvarchar", "maxLength":"10"},"MAINACCOUNTID": {"dataType": "nvarchar", "maxLength":"20"},"MAINACCOUNTIDVAT": {"dataType": "nvarchar", "maxLength":"20"},"MAINACCOUNTIDVATFEE": {"dataType": "nvarchar", "maxLength":"20"},"MAINACCOUNTIDABSORB": {"dataType": "nvarchar", "maxLength":"20"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"MAINACCOUNTIDABSORBVAT": {"dataType": "nvarchar", "maxLength":"20"},"TAXGROUP": {"dataType": "nvarchar", "maxLength":"10"},"TAXCODE": {"dataType": "nvarchar", "maxLength":"10"},"TAXDIRECTIONCONTROL": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_BILLPAYMENTCREDITCARDPARAMETER;