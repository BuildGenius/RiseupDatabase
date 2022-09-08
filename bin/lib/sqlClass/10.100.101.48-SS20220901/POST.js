const Database = require('../Database');

class POST extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'POST';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"SupCode": {"dataType": "varchar", "maxLength":"20"},"STType": {"dataType": "int", "maxLength":"null"},"MoneyIn": {"dataType": "money", "maxLength":"null"},"MoneyOut": {"dataType": "money", "maxLength":"null"},"RemainSupInter": {"dataType": "money", "maxLength":"null"},"RemainSupLocal": {"dataType": "money", "maxLength":"null"},"RemainAllLocal": {"dataType": "money", "maxLength":"null"},"BillID": {"dataType": "int", "maxLength":"null"},"BillBranch": {"dataType": "int", "maxLength":"null"},"BillType": {"dataType": "int", "maxLength":"null"},"POSTID": {"dataType": "int", "maxLength":"null"},"BalanceCN": {"dataType": "money", "maxLength":"null"},"CancelID": {"dataType": "int", "maxLength":"null"},"Detail": {"dataType": "varchar", "maxLength":"200"},"Comment": {"dataType": "varchar", "maxLength":"200"},"ExchangeRate": {"dataType": "money", "maxLength":"null"},"CurrencyID": {"dataType": "int", "maxLength":"null"},"BankFromID": {"dataType": "int", "maxLength":"null"},"BankToID": {"dataType": "int", "maxLength":"null"},"BankFee": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = POST;