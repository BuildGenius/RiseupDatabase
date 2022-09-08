const Database = require('../Database');

class ConCusItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ConCusItem';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"CID": {"dataType": "int", "maxLength":"null"},"CBranch": {"dataType": "int", "maxLength":"null"},"TType": {"dataType": "int", "maxLength":"null"},"TID": {"dataType": "int", "maxLength":"null"},"SProduct": {"dataType": "varchar", "maxLength":"40"},"SSerial": {"dataType": "varchar", "maxLength":"40"},"SCID": {"dataType": "int", "maxLength":"null"},"SCBranch": {"dataType": "int", "maxLength":"null"},"STType": {"dataType": "int", "maxLength":"null"},"STID": {"dataType": "int", "maxLength":"null"},"RowNo": {"dataType": "int", "maxLength":"null"},"ConNumber": {"dataType": "int", "maxLength":"null"},"SellNumber": {"dataType": "int", "maxLength":"null"},"RetNumber": {"dataType": "int", "maxLength":"null"},"LeftNumber": {"dataType": "int", "maxLength":"null"},"Price": {"dataType": "money", "maxLength":"null"},"PAD": {"dataType": "money", "maxLength":"null"},"PBV": {"dataType": "money", "maxLength":"null"},"PAV": {"dataType": "money", "maxLength":"null"},"CMT1": {"dataType": "money", "maxLength":"null"},"CMT2": {"dataType": "money", "maxLength":"null"},"CMT3": {"dataType": "money", "maxLength":"null"},"CMT4": {"dataType": "money", "maxLength":"null"},"CMT5": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ConCusItem;