const Database = require('../Database');

class ReceiptCancel extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ReceiptCancel';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"ReceiptID": {"dataType": "int", "maxLength":"null"},"ReceiptBranch": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = ReceiptCancel;