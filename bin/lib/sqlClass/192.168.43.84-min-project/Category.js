const Database = require('../Database');

class Category extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Category';
        this.column = {
            "Dimension value": {"dataType": "nvarchar", "maxLength":"255"},"Description": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = Category;