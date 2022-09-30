const Database = require('../Database');

class DerivedDimension extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'DerivedDimension';
        this.column = {
            "SubCateogryID": {"dataType": "int", "maxLength":"null"},"CategoryID": {"dataType": "int", "maxLength":"null"},"GroupCategory": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = DerivedDimension;