const Database = require('../Database');

class SI extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SI';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"SIID": {"dataType": "int", "maxLength":"null"},"SIBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"SOID": {"dataType": "int", "maxLength":"null"},"SOBranch": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"Number": {"dataType": "int", "maxLength":"null"},"SIComment": {"dataType": "varchar", "maxLength":"300"},"SOComment": {"dataType": "varchar", "maxLength":"300"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = SI;