const Database = require('../Database');

class Product extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Product';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"ProductName": {"dataType": "varchar", "maxLength":"200"},"Unit": {"dataType": "varchar", "maxLength":"15"},"ProductType": {"dataType": "int", "maxLength":"null"},"GroupCatID": {"dataType": "int", "maxLength":"null"},"CategoryID": {"dataType": "int", "maxLength":"null"},"CategoryName": {"dataType": "varchar", "maxLength":"50"},"SubCat": {"dataType": "varchar", "maxLength":"100"},"Brand": {"dataType": "varchar", "maxLength":"50"},"Model": {"dataType": "varchar", "maxLength":"100"},"PMName": {"dataType": "varchar", "maxLength":"300"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Product;