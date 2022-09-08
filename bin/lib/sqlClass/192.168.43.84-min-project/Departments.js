const Database = require('../Database');

class Departments extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Departments';
        this.column = {
            "Dimension value": {"dataType": "nvarchar", "maxLength":"255"},"Description": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = Departments;