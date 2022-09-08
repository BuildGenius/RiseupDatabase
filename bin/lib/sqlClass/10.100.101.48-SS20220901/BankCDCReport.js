const Database = require('../Database');

class BankCDCReport extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BankCDCReport';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"BankID": {"dataType": "int", "maxLength":"null"},"CDCConfigID": {"dataType": "int", "maxLength":"null"},"TransDate": {"dataType": "datetime", "maxLength":"null"},"TransAmount": {"dataType": "money", "maxLength":"null"},"Commission": {"dataType": "money", "maxLength":"null"},"VAT": {"dataType": "money", "maxLength":"null"},"OtherAmount": {"dataType": "money", "maxLength":"null"},"NETAmount": {"dataType": "money", "maxLength":"null"},"FileName": {"dataType": "varchar", "maxLength":"100"},"IsManual": {"dataType": "bit", "maxLength":"null"},"IsMatched": {"dataType": "bit", "maxLength":"null"},"IsDeleted": {"dataType": "bit", "maxLength":"null"},"IsInactive": {"dataType": "bit", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BankCDCReport;