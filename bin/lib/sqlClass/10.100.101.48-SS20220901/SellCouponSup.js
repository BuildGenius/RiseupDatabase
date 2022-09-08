const Database = require('../Database');

class SellCouponSup extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SellCouponSup';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"TypeID": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"Number": {"dataType": "int", "maxLength":"null"},"Price": {"dataType": "money", "maxLength":"null"},"StartDate": {"dataType": "datetime", "maxLength":"null"},"ExpireDate": {"dataType": "datetime", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = SellCouponSup;