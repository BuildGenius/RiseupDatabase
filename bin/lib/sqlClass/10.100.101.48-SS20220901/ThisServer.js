const Database = require('../Database');

class ThisServer extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ThisServer';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"100"},"Comment": {"dataType": "varchar", "maxLength":"300"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = ThisServer;