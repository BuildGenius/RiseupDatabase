const Database = require('../Database');

class Privilege extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Privilege';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"200"},"Detail": {"dataType": "varchar", "maxLength":"300"},"Comment": {"dataType": "varchar", "maxLength":"300"},"OPID": {"dataType": "int", "maxLength":"null"},"Show": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = Privilege;