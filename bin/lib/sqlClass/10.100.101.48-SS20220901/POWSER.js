const Database = require('../Database');

class POWSER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'POWSER';
        this.column = {
            "POID": {"dataType": "int", "maxLength":"null"},"POBranch": {"dataType": "int", "maxLength":"null"},"CurrencyID": {"dataType": "int", "maxLength":"null"},"ExchangeRate": {"dataType": "money", "maxLength":"null"},"BuyWSID": {"dataType": "int", "maxLength":"null"},"BuyWSBranch": {"dataType": "int", "maxLength":"null"},"Finish": {"dataType": "int", "maxLength":"null"},"FinishTime": {"dataType": "datetime", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = POWSER;