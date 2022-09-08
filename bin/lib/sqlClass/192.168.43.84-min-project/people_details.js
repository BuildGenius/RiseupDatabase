const Database = require('../Database');

class people_details extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'people_details';
        this.column = {
            "people_id": {"dataType": "int", "maxLength":"null"},"METAKEY": {"dataType": "nvarchar", "maxLength":"75"},"METAVALUE": {"dataType": "text", "maxLength":"2147483647"}
        };
    }
}

module.exports = people_details;