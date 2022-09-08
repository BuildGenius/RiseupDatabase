const Database = require('../Database');

class BranchTerminalID extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BranchTerminalID';
        this.column = {
            "Branch": {"dataType": "int", "maxLength":"null"},"TerminalID": {"dataType": "varchar", "maxLength":"20"},"TIDSecond": {"dataType": "varchar", "maxLength":"20"},"EDCID": {"dataType": "int", "maxLength":"null"},"Detail": {"dataType": "varchar", "maxLength":"300"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BranchTerminalID;