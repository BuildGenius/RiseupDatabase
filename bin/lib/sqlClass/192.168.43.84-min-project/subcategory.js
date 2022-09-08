const Database = require('../Database');

class subcategory extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'subcategory';
        this.column = {
            "Dimension value": {"dataType": "nvarchar", "maxLength":"255"},"Description": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = subcategory;