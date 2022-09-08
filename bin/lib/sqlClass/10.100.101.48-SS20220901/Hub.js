const Database = require('../Database');

class Hub extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Hub';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"200"},"Detail": {"dataType": "varchar", "maxLength":"300"},"MainID": {"dataType": "int", "maxLength":"null"},"Comment": {"dataType": "varchar", "maxLength":"300"},"PText": {"dataType": "varchar", "maxLength":"200"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = Hub;