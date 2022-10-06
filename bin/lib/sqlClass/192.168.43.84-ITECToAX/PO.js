const Database = require('../Database');

class PO extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'PO';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"POID": {"dataType": "int", "maxLength":"null"},"POBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"BranchTo": {"dataType": "int", "maxLength":"null"},"CurrencyCode": {"dataType": "varchar", "maxLength":"50"},"POType": {"dataType": "int", "maxLength":"null"},"ExchangeRate": {"dataType": "money", "maxLength":"null"},"SupCode": {"dataType": "varchar", "maxLength":"20"},"SupplierName": {"dataType": "varchar", "maxLength":"100"},"CrDay": {"dataType": "int", "maxLength":"null"},"RowNo": {"dataType": "int", "maxLength":"null"},"Number": {"dataType": "int", "maxLength":"null"},"PBV": {"dataType": "money", "maxLength":"null"},"PAV": {"dataType": "money", "maxLength":"null"},"VATRate": {"dataType": "money", "maxLength":"null"},"ArrTime": {"dataType": "datetime", "maxLength":"null"},"TransportName": {"dataType": "varchar", "maxLength":"50"},"TransportTerm": {"dataType": "varchar", "maxLength":"50"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = PO;