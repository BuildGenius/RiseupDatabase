const Database = require('../Database');

class ConCusRet extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ConCusRet';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"ConCusID": {"dataType": "int", "maxLength":"null"},"ConCusBranch": {"dataType": "int", "maxLength":"null"},"DocNo": {"dataType": "int", "maxLength":"null"},"DocDate": {"dataType": "datetime", "maxLength":"null"},"Version": {"dataType": "int", "maxLength":"null"},"CusCode": {"dataType": "varchar", "maxLength":"20"},"DocRef": {"dataType": "varchar", "maxLength":"30"},"OfficerID": {"dataType": "int", "maxLength":"null"},"Approve": {"dataType": "int", "maxLength":"null"},"Comment": {"dataType": "varchar", "maxLength":"300"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ConCusRet;