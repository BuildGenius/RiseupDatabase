const Database = require('../Database');

class Deposit extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Deposit';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"DepositID": {"dataType": "int", "maxLength":"null"},"DepositBranch": {"dataType": "int", "maxLength":"null"},"DocDate": {"dataType": "datetime", "maxLength":"null"},"CusCode": {"dataType": "varchar", "maxLength":"20"},"Detail": {"dataType": "varchar", "maxLength":"300"},"Amount": {"dataType": "money", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Deposit;