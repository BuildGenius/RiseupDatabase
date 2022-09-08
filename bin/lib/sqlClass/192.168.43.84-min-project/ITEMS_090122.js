const Database = require('../Database');

class ITEMS_090122 extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ITEMS_090122';
        this.column = {
            "Item number": {"dataType": "nvarchar", "maxLength":"255"},"Product Number reference": {"dataType": "nvarchar", "maxLength":"255"},"Search name": {"dataType": "nvarchar", "maxLength":"255"},"Product name": {"dataType": "nvarchar", "maxLength":"255"},"Product type": {"dataType": "nvarchar", "maxLength":"255"},"Product subtype": {"dataType": "nvarchar", "maxLength":"255"},"Approved vendor check method": {"dataType": "nvarchar", "maxLength":"255"},"Product dimension groups": {"dataType": "nvarchar", "maxLength":"255"},"Product lifecycle state": {"dataType": "nvarchar", "maxLength":"255"},"Model": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = ITEMS_090122;