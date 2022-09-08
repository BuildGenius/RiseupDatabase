const Database = require('../Database');

class ULCancelBill extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ULCancelBill';
        this.column = {
            "TableType": {"dataType": "int", "maxLength":"null"},"ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"BranchUL": {"dataType": "int", "maxLength":"null"},"OfficerID": {"dataType": "int", "maxLength":"null"},"TLogOnOffID": {"dataType": "int", "maxLength":"null"},"TBillOffID": {"dataType": "int", "maxLength":"null"},"Finish": {"dataType": "int", "maxLength":"null"},"FinishTime": {"dataType": "datetime", "maxLength":"null"},"Comment": {"dataType": "varchar", "maxLength":"300"},"IPAddress": {"dataType": "varchar", "maxLength":"100"},"CPName": {"dataType": "varchar", "maxLength":"100"},"SystemSerial": {"dataType": "varchar", "maxLength":"100"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ULCancelBill;