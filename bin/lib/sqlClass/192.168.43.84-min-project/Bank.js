const Database = require('../Database');

class Bank extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Bank';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"ID": {"dataType": "int", "maxLength":"null"},"AccountName": {"dataType": "nvarchar", "maxLength":"255"},"BankName": {"dataType": "nvarchar", "maxLength":"255"},"BankAccFormat": {"dataType": "nvarchar", "maxLength":"255"},"BankAccount": {"dataType": "nvarchar", "maxLength":"255"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "nvarchar", "maxLength":"255"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Bank;