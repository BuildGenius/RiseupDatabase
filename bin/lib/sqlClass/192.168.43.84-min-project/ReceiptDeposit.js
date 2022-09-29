const Database = require('../Database');

class ReceiptDeposit extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ReceiptDeposit';
        this.column = {
            "RefKey": {"dataType": "bigint", "maxLength":"null"},"TransactionID": {"dataType": "int", "maxLength":"null"},"ReceiptMethod": {"dataType": "int", "maxLength":"null"},"ReceiptDate": {"dataType": "datetime", "maxLength":"null"},"Amount": {"dataType": "money", "maxLength":"null"},"EDCNo": {"dataType": "varchar", "maxLength":"20"},"TransferBankID": {"dataType": "int", "maxLength":"null"},"TransferBankName": {"dataType": "varchar", "maxLength":"200"},"TransferBankAccountNo": {"dataType": "varchar", "maxLength":"50"},"ChequeNo": {"dataType": "varchar", "maxLength":"20"},"SlipNo": {"dataType": "varchar", "maxLength":"20"},"CCNo": {"dataType": "varchar", "maxLength":"20"},"DepositID": {"dataType": "int", "maxLength":"null"},"DepositBranch": {"dataType": "int", "maxLength":"null"},"Remark": {"dataType": "varchar", "maxLength":"300"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = ReceiptDeposit;