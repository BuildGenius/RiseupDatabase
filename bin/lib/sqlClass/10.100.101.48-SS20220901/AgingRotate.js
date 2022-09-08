const Database = require('../Database');

class AgingRotate extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'AgingRotate';
        this.column = {
            "ARID": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"BranchID": {"dataType": "int", "maxLength":"null"},"BranchTo": {"dataType": "int", "maxLength":"null"},"Number": {"dataType": "int", "maxLength":"null"},"NumSend": {"dataType": "int", "maxLength":"null"},"SOID": {"dataType": "int", "maxLength":"null"},"JobStatus": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"},"RepairCInID": {"dataType": "int", "maxLength":"null"},"RepairCInBranch": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = AgingRotate;