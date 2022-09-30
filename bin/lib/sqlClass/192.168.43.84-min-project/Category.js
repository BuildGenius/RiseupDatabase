const Database = require('../Database');

class Category extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Category';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"CategoryName": {"dataType": "nvarchar", "maxLength":"250"}
        };
    }
}

module.exports = Category;