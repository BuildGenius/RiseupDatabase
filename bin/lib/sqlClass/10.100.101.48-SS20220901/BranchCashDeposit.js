const Database = require('../Database');

class BranchCashDeposit extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BranchCashDeposit';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Branch": {"dataType": "int", "maxLength":"null"},"SellBeginDate": {"dataType": "datetime", "maxLength":"null"},"SellEndDate": {"dataType": "datetime", "maxLength":"null"},"BankID": {"dataType": "int", "maxLength":"null"},"ITECAmount": {"dataType": "money", "maxLength":"null"},"Deposit": {"dataType": "money", "maxLength":"null"},"OfficerID": {"dataType": "int", "maxLength":"null"},"SlipDate": {"dataType": "datetime", "maxLength":"null"},"CommentShop": {"dataType": "varchar", "maxLength":"300"},"CommentFinance": {"dataType": "varchar", "maxLength":"300"},"Approve": {"dataType": "int", "maxLength":"null"},"Adjusted": {"dataType": "int", "maxLength":"null"},"Fee": {"dataType": "money", "maxLength":"null"},"UOffRow": {"dataType": "int", "maxLength":"null"},"UTiomeRow": {"dataType": "datetime", "maxLength":"null"},"SellDate": {"dataType": "datetime", "maxLength":"null"},"TotalITECAmount": {"dataType": "money", "maxLength":"null"},"TotalDeposit": {"dataType": "money", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrOff": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UOff": {"dataType": "int", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"RepTime": {"dataType": "datetime", "maxLength":"null"},"Counter": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BranchCashDeposit;