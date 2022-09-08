const Database = require('../Database');

class RepairSInItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'RepairSInItem';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"Number": {"dataType": "int", "maxLength":"null"},"Price": {"dataType": "money", "maxLength":"null"},"PAD": {"dataType": "money", "maxLength":"null"},"PBV": {"dataType": "money", "maxLength":"null"},"PAV": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = RepairSInItem;