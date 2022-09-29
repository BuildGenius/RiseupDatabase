const Database = require('../Database');

class DerivedDimension extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'DerivedDimension';
        this.column = {
            "SubCategoryID": {"dataType": "nvarchar", "maxLength":"10"},"CategoryID": {"dataType": "nvarchar", "maxLength":"10"},"GroupCategory": {"dataType": "nvarchar", "maxLength":"10"},"CreateAt": {"dataType": "datetime", "maxLength":"null"},"UpdateAt": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = DerivedDimension;