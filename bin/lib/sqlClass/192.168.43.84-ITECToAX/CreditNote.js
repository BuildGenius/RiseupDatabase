const Database = require('../Database');

class CreditNote extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'CreditNote';
        this.column = {
            "RefKey": {"dataType": "bigint", "maxLength":"null"},"TransactionID": {"dataType": "int", "maxLength":"null"},"CNID": {"dataType": "int", "maxLength":"null"},"CNBranch": {"dataType": "int", "maxLength":"null"},"PaymentMethod": {"dataType": "int", "maxLength":"null"},"CNDate": {"dataType": "datetime", "maxLength":"null"},"CNNumber": {"dataType": "varchar", "maxLength":"30"},"CusCode": {"dataType": "varchar", "maxLength":"20"},"MemberName": {"dataType": "varchar", "maxLength":"300"},"CurrencyCode": {"dataType": "varchar", "maxLength":"50"},"ExchangeRate": {"dataType": "money", "maxLength":"null"},"SellID": {"dataType": "int", "maxLength":"null"},"SellBranch": {"dataType": "int", "maxLength":"null"},"RefAllSellBill": {"dataType": "varchar", "maxLength":"-1"},"ApplySellID": {"dataType": "int", "maxLength":"null"},"ApplyBranchID": {"dataType": "int", "maxLength":"null"},"ApplyAmount": {"dataType": "money", "maxLength":"null"},"TotalCNAmount": {"dataType": "money", "maxLength":"null"},"CNAmountBV": {"dataType": "money", "maxLength":"null"},"CNAmountAV": {"dataType": "money", "maxLength":"null"},"VATType": {"dataType": "int", "maxLength":"null"},"VATAmount": {"dataType": "money", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = CreditNote;