const Database = require('../Database');

class ConSupItemPO extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ConSupItemPO';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"POID": {"dataType": "int", "maxLength":"null"},"POBranch": {"dataType": "int", "maxLength":"null"},"PBNumber": {"dataType": "int", "maxLength":"null"},"RNumber": {"dataType": "int", "maxLength":"null"},"PRNumber": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ConSupItemPO;