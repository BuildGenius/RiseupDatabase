const Database = require('../Database');

class OffSalary extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'OffSalary';
        this.column = {
            "OSID": {"dataType": "int", "maxLength":"null"},"OfficerID": {"dataType": "int", "maxLength":"null"},"SumEarnMoney": {"dataType": "money", "maxLength":"null"},"SumSubtractMoney": {"dataType": "money", "maxLength":"null"},"NetSalary": {"dataType": "money", "maxLength":"null"},"StartCalDate": {"dataType": "datetime", "maxLength":"null"},"EndCalDate": {"dataType": "datetime", "maxLength":"null"},"NumLateMins": {"dataType": "int", "maxLength":"null"},"NumAbsentDays": {"dataType": "int", "maxLength":"null"},"Paid": {"dataType": "int", "maxLength":"null"},"SalaryMonth": {"dataType": "datetime", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = OffSalary;