const Database = require('../Database');

class SecGroup extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SecGroup';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"200"},"Comment": {"dataType": "varchar", "maxLength":"300"},"OPID": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = SecGroup;