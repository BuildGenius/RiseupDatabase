const Database = require('../Database');

class PettyCash extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'PettyCash';
        this.column = {
            "RefKey": {"dataType": "bigint", "maxLength":"null"},"TransactionID": {"dataType": "int", "maxLength":"null"},"BranchID": {"dataType": "int", "maxLength":"null"},"InvoiceNo": {"dataType": "varchar", "maxLength":"300"},"InvoiceDate": {"dataType": "datetime", "maxLength":"null"},"VenderNo": {"dataType": "varchar", "maxLength":"300"},"Amount": {"dataType": "money", "maxLength":"null"},"CurrencyCode": {"dataType": "varchar", "maxLength":"50"},"TermsID": {"dataType": "money", "maxLength":"null"},"Detail": {"dataType": "varchar", "maxLength":"-1"},"Source": {"dataType": "varchar", "maxLength":"100"},"PaymentMethod": {"dataType": "varchar", "maxLength":"100"},"PaymentGroup": {"dataType": "varchar", "maxLength":"100"},"GLDate": {"dataType": "datetime", "maxLength":"null"},"AcctPayCodeCombinationID": {"dataType": "varchar", "maxLength":"100"},"OrgID": {"dataType": "int", "maxLength":"null"},"TermsDate": {"dataType": "datetime", "maxLength":"null"},"LineNo": {"dataType": "int", "maxLength":"null"},"LineType": {"dataType": "varchar", "maxLength":"100"},"AmountBV": {"dataType": "money", "maxLength":"null"},"AmountAV": {"dataType": "money", "maxLength":"null"},"LineDetail": {"dataType": "varchar", "maxLength":"-1"},"AccountCode": {"dataType": "varchar", "maxLength":"100"},"TaxClassificationCode": {"dataType": "varchar", "maxLength":"100"},"CrTime": {"dataType": "datetime", "maxLength":"null"},"UTime": {"dataType": "datetime", "maxLength":"null"},"ImportTime": {"dataType": "datetime", "maxLength":"null"},"BPC_status": {"dataType": "int", "maxLength":"null"},"BPC_Remark": {"dataType": "varchar", "maxLength":"-1"},"BPC_StatusDatetime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = PettyCash;