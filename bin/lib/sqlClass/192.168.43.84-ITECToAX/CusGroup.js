const Database = require('../Database');

class CusGroup extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CusGroup';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"200"},"Detail": {"dataType": "varchar", "maxLength":"300"},"Comment": {"dataType": "varchar", "maxLength":"300"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = CusGroup;