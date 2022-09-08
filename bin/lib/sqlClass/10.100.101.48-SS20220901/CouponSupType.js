const Database = require('../Database');

class CouponSupType extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CouponSupType';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Name": {"dataType": "varchar", "maxLength":"100"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = CouponSupType;