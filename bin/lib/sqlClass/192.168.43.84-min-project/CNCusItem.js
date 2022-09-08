const Database = require('../Database');

class CNCusItem extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CNCusItem';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"SellID": {"dataType": "int", "maxLength":"null"},"SellBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"CID": {"dataType": "int", "maxLength":"null"},"CBranch": {"dataType": "int", "maxLength":"null"},"TType": {"dataType": "int", "maxLength":"null"},"TID": {"dataType": "int", "maxLength":"null"},"SProduct": {"dataType": "varchar", "maxLength":"40"},"SSerial": {"dataType": "varchar", "maxLength":"40"},"SCID": {"dataType": "int", "maxLength":"null"},"SCBranch": {"dataType": "int", "maxLength":"null"},"STType": {"dataType": "int", "maxLength":"null"},"STID": {"dataType": "int", "maxLength":"null"},"SellNumber": {"dataType": "int", "maxLength":"null"},"ReturnNumber": {"dataType": "int", "maxLength":"null"},"SellPAV": {"dataType": "money", "maxLength":"null"},"SumSellPAV": {"dataType": "money", "maxLength":"null"},"RemainCNPrice": {"dataType": "money", "maxLength":"null"},"PriceType": {"dataType": "int", "maxLength":"null"},"Price": {"dataType": "money", "maxLength":"null"},"PBV": {"dataType": "money", "maxLength":"null"},"PAV": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = CNCusItem;