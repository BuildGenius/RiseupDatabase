const Database = require('../Database');

class BPC_CREDITNOTE_INTERFACESTAGING extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_CREDITNOTE_INTERFACESTAGING';
        this.column = {
            "DEFINITIONGROUP": {"dataType": "nvarchar", "maxLength":"60"},"EXECUTIONID": {"dataType": "nvarchar", "maxLength":"90"},"ISSELECTED": {"dataType": "int", "maxLength":"null"},"TRANSFERSTATUS": {"dataType": "int", "maxLength":"null"},"TRANSACTIONID": {"dataType": "int", "maxLength":"null"},"SELLBRANCH": {"dataType": "int", "maxLength":"null"},"SELLID": {"dataType": "int", "maxLength":"null"},"PRODUCT": {"dataType": "nvarchar", "maxLength":"40"},"ROWNO": {"dataType": "int", "maxLength":"null"},"NUMBER_": {"dataType": "numeric", "maxLength":"null"},"CUSCODE": {"dataType": "nvarchar", "maxLength":"20"},"CREDITDAY": {"dataType": "int", "maxLength":"null"},"CURRENCYCODE": {"dataType": "nvarchar", "maxLength":"50"},"EXCHANGERATE": {"dataType": "numeric", "maxLength":"null"},"CUSTOMERNAME": {"dataType": "nvarchar", "maxLength":"300"},"MEMBERNAME": {"dataType": "nvarchar", "maxLength":"300"},"TAXINVOICE": {"dataType": "nvarchar", "maxLength":"30"},"UNITPRICE": {"dataType": "numeric", "maxLength":"null"},"TOTALPRICEBV": {"dataType": "numeric", "maxLength":"null"},"TOTALPRICEAV": {"dataType": "numeric", "maxLength":"null"},"VATAMOUNT": {"dataType": "numeric", "maxLength":"null"},"VATRATE": {"dataType": "numeric", "maxLength":"null"},"VATTYPE": {"dataType": "int", "maxLength":"null"},"STATUS": {"dataType": "int", "maxLength":"null"},"INVOICEDATE": {"dataType": "datetime", "maxLength":"null"},"INVOICEDATETZID": {"dataType": "int", "maxLength":"null"},"STATUSINF": {"dataType": "int", "maxLength":"null"},"INFOLOGDATA": {"dataType": "varbinary", "maxLength":"-1"},"UTIME": {"dataType": "datetime", "maxLength":"null"},"UTIMETZID": {"dataType": "int", "maxLength":"null"},"CRTIME": {"dataType": "datetime", "maxLength":"null"},"CRTIMETZID": {"dataType": "int", "maxLength":"null"},"IMPORTTIME": {"dataType": "datetime", "maxLength":"null"},"IMPORTTIMETZID": {"dataType": "int", "maxLength":"null"},"DOCTYPE": {"dataType": "int", "maxLength":"null"},"CNID": {"dataType": "int", "maxLength":"null"},"CNBRANCH": {"dataType": "int", "maxLength":"null"},"CNDATE": {"dataType": "datetime", "maxLength":"null"},"CNDATETZID": {"dataType": "int", "maxLength":"null"},"CNNUMBER": {"dataType": "nvarchar", "maxLength":"30"},"REFALLSELLBILL": {"dataType": "nvarchar", "maxLength":"-1"},"APPLYSELLID": {"dataType": "int", "maxLength":"null"},"APPLYBRANCHID": {"dataType": "int", "maxLength":"null"},"APPLYAMOUNT": {"dataType": "numeric", "maxLength":"null"},"TOTALCNAMOUNT": {"dataType": "numeric", "maxLength":"null"},"CNAMOUNTBV": {"dataType": "numeric", "maxLength":"null"},"CNAMOUNTAV": {"dataType": "numeric", "maxLength":"null"},"PAYMENTMETHOD": {"dataType": "int", "maxLength":"null"},"SERIAL": {"dataType": "nvarchar", "maxLength":"40"},"CNPREFIX": {"dataType": "nvarchar", "maxLength":"2"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"}
        };
    }
}

module.exports = BPC_CREDITNOTE_INTERFACESTAGING;