const Database = require('../Database');

class OffPreEarn extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'OffPreEarn';
        this.column = {
            "OPEID": {"dataType": "int", "maxLength":"null"},"OfficerID": {"dataType": "int", "maxLength":"null"},"SumEarnMoney": {"dataType": "money", "maxLength":"null"},"SalaryMonth": {"dataType": "datetime", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = OffPreEarn;