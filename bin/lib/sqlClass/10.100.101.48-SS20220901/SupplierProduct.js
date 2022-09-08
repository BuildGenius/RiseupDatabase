const Database = require('../Database');

class SupplierProduct extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SupplierProduct';
        this.column = {
            "SupCode": {"dataType": "varchar", "maxLength":"20"},"Product": {"dataType": "varchar", "maxLength":"40"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = SupplierProduct;