const Database = require('../Database');

class DayStockOut extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'DayStockOut';
        this.column = {
            "BranchFrom": {"dataType": "int", "maxLength":"null"},"NumDay": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = DayStockOut;