const Database = require('../Database');

class POForce extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'POForce';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"POID": {"dataType": "int", "maxLength":"null"},"POBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"BranchTo": {"dataType": "int", "maxLength":"null"},"ForceFinishDate": {"dataType": "datetime", "maxLength":"null"},"SupCode": {"dataType": "varchar", "maxLength":"20"},"SupplierName": {"dataType": "varchar", "maxLength":"100"},"RowNo": {"dataType": "int", "maxLength":"null"},"Number": {"dataType": "int", "maxLength":"null"},"ForceRemain": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = POForce;