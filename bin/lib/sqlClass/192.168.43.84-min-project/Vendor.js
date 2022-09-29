const Database = require('../Database');

class Vendor extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Vendor';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"SupCode": {"dataType": "varchar", "maxLength":"20"},"TaxNo": {"dataType": "varchar", "maxLength":"50"},"Title": {"dataType": "varchar", "maxLength":"30"},"Name": {"dataType": "varchar", "maxLength":"100"},"Address1": {"dataType": "varchar", "maxLength":"200"},"Address2": {"dataType": "varchar", "maxLength":"200"},"Contact": {"dataType": "varchar", "maxLength":"200"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Vendor;