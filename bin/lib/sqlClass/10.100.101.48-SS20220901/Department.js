const Database = require('../Database');

class Department extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Department';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"200"},"Detail": {"dataType": "varchar", "maxLength":"300"},"Comment": {"dataType": "varchar", "maxLength":"300"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = Department;