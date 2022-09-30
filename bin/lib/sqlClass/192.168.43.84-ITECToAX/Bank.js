const Database = require('../Database');

class Bank extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Bank';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"ID": {"dataType": "int", "maxLength":"null"},"AccountName": {"dataType": "varchar", "maxLength":"200"},"BankName": {"dataType": "varchar", "maxLength":"200"},"BankAccFormat": {"dataType": "varchar", "maxLength":"50"},"BankAccount": {"dataType": "varchar", "maxLength":"50"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Bank;