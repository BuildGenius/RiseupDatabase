const Database = require('../Database');

class InventoryInOut extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'InventoryInOut';
        this.column = {
            "RefKey": {"dataType": "bigint", "maxLength":"null"},"TransactionID": {"dataType": "int", "maxLength":"null"},"TransactionType": {"dataType": "int", "maxLength":"null"},"BillID": {"dataType": "int", "maxLength":"null"},"BillBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"50"},"Number": {"dataType": "int", "maxLength":"null"},"Cost": {"dataType": "money", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"POID": {"dataType": "int", "maxLength":"null"},"POBranch": {"dataType": "int", "maxLength":"null"},"ProductRet": {"dataType": "varchar", "maxLength":"40"},"SerialRet": {"dataType": "varchar", "maxLength":"40"},"NumberRet": {"dataType": "int", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = InventoryInOut;