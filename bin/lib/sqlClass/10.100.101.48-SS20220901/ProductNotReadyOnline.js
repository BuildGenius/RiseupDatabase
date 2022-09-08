const Database = require('../Database');

class ProductNotReadyOnline extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ProductNotReadyOnline';
        this.column = {
            "Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"100"},"Number": {"dataType": "int", "maxLength":"null"},"Comment": {"dataType": "varchar", "maxLength":"500"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ProductNotReadyOnline;