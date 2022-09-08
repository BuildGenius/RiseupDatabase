const Database = require('../Database');

class deriveddim extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'deriveddim';
        this.column = {
            "SubCategory": {"dataType": "nvarchar", "maxLength":"255"},"Category": {"dataType": "nvarchar", "maxLength":"255"},"GroupCategory": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = deriveddim;