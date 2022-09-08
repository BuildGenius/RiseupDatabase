const Database = require('../Database');

class InvoiceM8_W_Producttype extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'InvoiceM8_W_Producttype';
        this.column = {
            "TRANSACTIONID": {"dataType": "int", "maxLength":"null"},"SELLID": {"dataType": "int", "maxLength":"null"},"SELLBRANCH": {"dataType": "int", "maxLength":"null"},"PRODUCT": {"dataType": "nvarchar", "maxLength":"-1"},"ITEM_NUMBER": {"dataType": "nvarchar", "maxLength":"-1"},"ProductType": {"dataType": "nvarchar", "maxLength":"-1"},"SERIAL": {"dataType": "nvarchar", "maxLength":"-1"},"INVOICEDATE": {"dataType": "datetime", "maxLength":"null"},"CUSCODE": {"dataType": "nvarchar", "maxLength":"25"},"CREDITDAY": {"dataType": "int", "maxLength":"null"},"CURRENCYCODE": {"dataType": "nvarchar", "maxLength":"25"},"EXCHANGERATE": {"dataType": "money", "maxLength":"null"},"CUSTOMERNAME": {"dataType": "nvarchar", "maxLength":"255"},"MEMBERNAME": {"dataType": "nvarchar", "maxLength":"255"},"TAXINVOICE": {"dataType": "nvarchar", "maxLength":"-1"},"ROWNO": {"dataType": "int", "maxLength":"null"},"NUMBER": {"dataType": "int", "maxLength":"null"},"UNITPRICE": {"dataType": "money", "maxLength":"null"},"TOTALPRICEBV": {"dataType": "money", "maxLength":"null"},"TOTALPRICEAV": {"dataType": "money", "maxLength":"null"},"VATAMOUNT": {"dataType": "money", "maxLength":"null"},"VATRATE": {"dataType": "money", "maxLength":"null"},"VATTYPE": {"dataType": "int", "maxLength":"null"},"STATUS": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = InvoiceM8_W_Producttype;