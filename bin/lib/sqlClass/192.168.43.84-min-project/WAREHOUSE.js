const Database = require('../Database');

class WAREHOUSE extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'WAREHOUSE';
        this.column = {
            "DEPARTMENT": {"dataType": "nvarchar", "maxLength":"25"},"BUSINESSUNIT": {"dataType": "nvarchar", "maxLength":"25"},"CHANNEL": {"dataType": "nvarchar", "maxLength":"25"}
        };
    }
}

module.exports = WAREHOUSE;