const Database = require('../Database');

class ConSup extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'ConSup';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"DocNo": {"dataType": "int", "maxLength":"null"},"DocDate": {"dataType": "datetime", "maxLength":"null"},"Version": {"dataType": "int", "maxLength":"null"},"SupCode": {"dataType": "varchar", "maxLength":"20"},"DocRef": {"dataType": "varchar", "maxLength":"30"},"PriceType": {"dataType": "int", "maxLength":"null"},"DiscountType": {"dataType": "int", "maxLength":"null"},"Discount": {"dataType": "money", "maxLength":"null"},"DiscountValue": {"dataType": "money", "maxLength":"null"},"VAT": {"dataType": "money", "maxLength":"null"},"VATValue": {"dataType": "money", "maxLength":"null"},"SumPrice": {"dataType": "money", "maxLength":"null"},"PAD": {"dataType": "money", "maxLength":"null"},"TotalPrice": {"dataType": "money", "maxLength":"null"},"OfficerID": {"dataType": "int", "maxLength":"null"},"Approve": {"dataType": "int", "maxLength":"null"},"Comment": {"dataType": "varchar", "maxLength":"300"},"Finish": {"dataType": "int", "maxLength":"null"},"FinishTime": {"dataType": "datetime", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = ConSup;