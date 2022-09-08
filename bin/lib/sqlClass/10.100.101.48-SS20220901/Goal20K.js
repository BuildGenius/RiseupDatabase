const Database = require('../Database');

class Goal20K extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Goal20K';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"SaleDate": {"dataType": "datetime", "maxLength":"null"},"SaleAmount": {"dataType": "money", "maxLength":"null"},"BranchID": {"dataType": "varchar", "maxLength":"50"},"Adjust": {"dataType": "money", "maxLength":"null"}
        };
    }
}

module.exports = Goal20K;