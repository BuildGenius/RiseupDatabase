const Database = require('../Database');

class SeeNewProduct extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'SeeNewProduct';
        this.column = {
            "Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"DateUse": {"dataType": "datetime", "maxLength":"null"},"LogOnOffID": {"dataType": "int", "maxLength":"null"},"CrProduct": {"dataType": "datetime", "maxLength":"null"},"DaysTillSee": {"dataType": "int", "maxLength":"null"},"PMID": {"dataType": "int", "maxLength":"null"},"CheckSee": {"dataType": "int", "maxLength":"null"},"CheckTime": {"dataType": "datetime", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = SeeNewProduct;