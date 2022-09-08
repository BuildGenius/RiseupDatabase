const Database = require('../Database');

class LogSave extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'LogSave';
        this.column = {
            "IPAddress": {"dataType": "varchar", "maxLength":"100"},"Branch": {"dataType": "int", "maxLength":"null"},"StartTime": {"dataType": "datetime", "maxLength":"null"},"EndTime": {"dataType": "datetime", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"100"},"SystemSerial": {"dataType": "varchar", "maxLength":"100"},"OfficerID": {"dataType": "int", "maxLength":"null"},"ProgramName": {"dataType": "varchar", "maxLength":"50"},"Version": {"dataType": "money", "maxLength":"null"}
        };
    }
}

module.exports = LogSave;