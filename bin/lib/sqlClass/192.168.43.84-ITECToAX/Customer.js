const Database = require('../Database');

class Customer extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Customer';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"CusCode": {"dataType": "varchar", "maxLength":"20"},"Type": {"dataType": "nchar", "maxLength":"10"},"CusType": {"dataType": "int", "maxLength":"null"},"CusGroup": {"dataType": "int", "maxLength":"null"},"CustomerName": {"dataType": "varchar", "maxLength":"300"},"TaxAddL1": {"dataType": "varchar", "maxLength":"200"},"TaxAddL2": {"dataType": "varchar", "maxLength":"200"},"TaxAddL3": {"dataType": "varchar", "maxLength":"200"},"TaxZipCode": {"dataType": "varchar", "maxLength":"10"},"TaxTel": {"dataType": "varchar", "maxLength":"200"},"Email": {"dataType": "varchar", "maxLength":"200"},"TaxFax": {"dataType": "varchar", "maxLength":"100"},"TaxNo": {"dataType": "varchar", "maxLength":"50"},"ContactPerson": {"dataType": "varchar", "maxLength":"200"},"CreditDay": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Customer;