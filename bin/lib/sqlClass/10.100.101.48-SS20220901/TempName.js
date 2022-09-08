const Database = require('../Database');

class TempName extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'TempName';
        this.column = {
            "ID": {"dataType": "float", "maxLength":"null"},"Name": {"dataType": "nvarchar", "maxLength":"255"}
        };
    }
}

module.exports = TempName;