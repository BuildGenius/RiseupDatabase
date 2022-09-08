const Database = require('../Database');

class people extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'people';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"referenceID": {"dataType": "nvarchar", "maxLength":"100"},"Email": {"dataType": "varchar", "maxLength":"75"},"hashPassword": {"dataType": "text", "maxLength":"2147483647"},"CreateAt": {"dataType": "datetime", "maxLength":"null"},"UpdateAt": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = people;