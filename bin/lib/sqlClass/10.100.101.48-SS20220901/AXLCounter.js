const Database = require('../Database');

class AXLCounter extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'AXLCounter';
        this.column = {
            "TableID": {"dataType": "int", "maxLength":"null"},"AXName": {"dataType": "varchar", "maxLength":"30"},"AXServerName": {"dataType": "varchar", "maxLength":"100"},"AXServerIP": {"dataType": "varchar", "maxLength":"100"},"Counter": {"dataType": "int", "maxLength":"null"},"LastImportDT": {"dataType": "datetime", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = AXLCounter;