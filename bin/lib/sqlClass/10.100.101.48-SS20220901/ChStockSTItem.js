const Database = require('../Database');

class ChStockSTItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ChStockSTItem';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"CID": {"dataType": "int", "maxLength":"null"},"CBranch": {"dataType": "int", "maxLength":"null"},"TType": {"dataType": "int", "maxLength":"null"},"TID": {"dataType": "int", "maxLength":"null"},"SProduct": {"dataType": "varchar", "maxLength":"40"},"SSerial": {"dataType": "varchar", "maxLength":"40"},"SCID": {"dataType": "int", "maxLength":"null"},"SCBranch": {"dataType": "int", "maxLength":"null"},"STType": {"dataType": "int", "maxLength":"null"},"STID": {"dataType": "int", "maxLength":"null"},"OffID": {"dataType": "int", "maxLength":"null"},"Comment": {"dataType": "varchar", "maxLength":"200"},"ChType": {"dataType": "int", "maxLength":"null"},"Number": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ChStockSTItem;