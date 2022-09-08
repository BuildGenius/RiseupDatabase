const Database = require('../Database');

class LockStockOrder extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'LockStockOrder';
        this.column = {
            "RefKey": {"dataType": "varchar", "maxLength":"50"},"Branch": {"dataType": "int", "maxLength":"null"},"CustomerName": {"dataType": "varchar", "maxLength":"100"},"CustomerLastName": {"dataType": "varchar", "maxLength":"100"},"CustomerTel": {"dataType": "varchar", "maxLength":"100"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = LockStockOrder;