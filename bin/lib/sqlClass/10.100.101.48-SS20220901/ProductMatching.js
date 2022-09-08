const Database = require('../Database');

class ProductMatching extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ProductMatching';
        this.column = {
            "Product": {"dataType": "varchar", "maxLength":"40"},"ProductMatchTypeID": {"dataType": "int", "maxLength":"null"},"ProductMatch": {"dataType": "varchar", "maxLength":"40"},"ProductMatchName": {"dataType": "varchar", "maxLength":"200"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ProductMatching;