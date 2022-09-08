const Database = require('../Database');

class OffSalaryItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'OffSalaryItem';
        this.column = {
            "OSID": {"dataType": "int", "maxLength":"null"},"OSSide": {"dataType": "int", "maxLength":"null"},"OSType": {"dataType": "int", "maxLength":"null"},"EarnMoney": {"dataType": "money", "maxLength":"null"},"SubtractMoney": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = OffSalaryItem;