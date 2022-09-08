const Database = require('../Database');

class SEIRALNUMBER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SEIRALNUMBER';
        this.column = {
            "Serial number": {"dataType": "nvarchar", "maxLength":"255"},"Item number": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = SEIRALNUMBER;