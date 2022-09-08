const Database = require('../Database');

class LockStockOrderItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'LockStockOrderItem';
        this.column = {
            "RefKey": {"dataType": "varchar", "maxLength":"50"},"Product": {"dataType": "varchar", "maxLength":"40"},"NumberUse": {"dataType": "int", "maxLength":"null"},"NumberRemain": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = LockStockOrderItem;