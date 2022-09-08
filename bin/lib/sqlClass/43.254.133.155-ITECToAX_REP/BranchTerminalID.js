const Database = require('../Database');

class BranchTerminalID extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BranchTerminalID';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"TerminalID": {"dataType": "varchar", "maxLength":"20"},"TIDSecond": {"dataType": "varchar", "maxLength":"20"},"EDCID": {"dataType": "int", "maxLength":"null"},"Detail": {"dataType": "varchar", "maxLength":"300"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = BranchTerminalID;