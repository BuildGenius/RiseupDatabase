const Database = require('../Database');

class Invoice extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'Invoice';
        this.column = {
            "TransactionID": {"dataType": "int", "maxLength":"null"},"SellID": {"dataType": "int", "maxLength":"null"},"SellBranch": {"dataType": "int", "maxLength":"null"},"Product": {"dataType": "varchar", "maxLength":"40"},"Serial": {"dataType": "varchar", "maxLength":"40"},"InvoiceDate": {"dataType": "datetime", "maxLength":"null"},"CusCode": {"dataType": "varchar", "maxLength":"20"},"CreditDay": {"dataType": "int", "maxLength":"null"},"CurrencyCode": {"dataType": "varchar", "maxLength":"50"},"ExchangeRate": {"dataType": "money", "maxLength":"null"},"CustomerName": {"dataType": "varchar", "maxLength":"300"},"MemberName": {"dataType": "varchar", "maxLength":"300"},"TaxInvoice": {"dataType": "varchar", "maxLength":"30"},"RowNo": {"dataType": "int", "maxLength":"null"},"Number": {"dataType": "int", "maxLength":"null"},"UnitPrice": {"dataType": "money", "maxLength":"null"},"TotalPriceBV": {"dataType": "money", "maxLength":"null"},"TotalPriceAV": {"dataType": "money", "maxLength":"null"},"VATAmount": {"dataType": "money", "maxLength":"null"},"VATRate": {"dataType": "money", "maxLength":"null"},"VATType": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"300"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = Invoice;