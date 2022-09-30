const Database = require('../Database');

class Buy extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Buy';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"BuyID": {"dataType": "int", "maxLength":"null"},"BuyBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"Number": {"dataType": "int", "maxLength":"null"},"POID": {"dataType": "int", "maxLength":"null"},"POBranch": {"dataType": "int", "maxLength":"null"},"POType": {"dataType": "int", "maxLength":"null"},"SupCode": {"dataType": "varchar", "maxLength":"20"},"CurrencyCode": {"dataType": "varchar", "maxLength":"50"},"ExchangeRate": {"dataType": "money", "maxLength":"null"},"DocRef": {"dataType": "varchar", "maxLength":"30"},"InvoiceDate": {"dataType": "datetime", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Buy;