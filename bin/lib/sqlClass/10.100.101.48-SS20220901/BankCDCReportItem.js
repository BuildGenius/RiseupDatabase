const Database = require('../Database');

class BankCDCReportItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BankCDCReportItem';
        this.column = {
            "BankCDCReportID": {"dataType": "int", "maxLength":"null"},"BankCDCReportItemID": {"dataType": "int", "maxLength":"null"},"TerminalID": {"dataType": "varchar", "maxLength":"20"},"TIDSecond": {"dataType": "varchar", "maxLength":"20"},"TransValueDate": {"dataType": "datetime", "maxLength":"null"},"TransAmount": {"dataType": "money", "maxLength":"null"},"Commission": {"dataType": "money", "maxLength":"null"},"VAT": {"dataType": "money", "maxLength":"null"},"OtherAmount": {"dataType": "money", "maxLength":"null"},"NETAmount": {"dataType": "money", "maxLength":"null"},"IsMatched": {"dataType": "bit", "maxLength":"null"},"CCName": {"dataType": "varchar", "maxLength":"100"},"IsDeleted": {"dataType": "bit", "maxLength":"null"},"IsInactive": {"dataType": "bit", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BankCDCReportItem;