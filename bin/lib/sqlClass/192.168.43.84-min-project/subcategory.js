const Database = require('../Database');

class SubCategory extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SubCategory';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"SubCategoryName": {"dataType": "nvarchar", "maxLength":"100"},"Category": {"dataType": "nvarchar", "maxLength":"100"}
        };
    }
}

module.exports = SubCategory;