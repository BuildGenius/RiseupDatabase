const Database = require('../Database');

class BPC_BANKRECONCILIATIONSTATEMENTHEADER extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'BPC_BANKRECONCILIATIONSTATEMENTHEADER';
        this.column = {
            "ACCOUNTID": {"dataType": "nvarchar", "maxLength":"10"},"CUTOFFDATE": {"dataType": "datetime", "maxLength":"null"},"DESCRIPTION": {"dataType": "nvarchar", "maxLength":"60"},"INUSEBY": {"dataType": "nvarchar", "maxLength":"20"},"ISRECONCILED": {"dataType": "int", "maxLength":"null"},"LOG": {"dataType": "nvarchar", "maxLength":"255"},"RECONCILEDDATE": {"dataType": "datetime", "maxLength":"null"},"RECONCILIATIONID": {"dataType": "nvarchar", "maxLength":"40"},"SESSIONID": {"dataType": "int", "maxLength":"null"},"SESSIONLOGINDATETIME": {"dataType": "datetime", "maxLength":"null"},"SESSIONLOGINDATETIMETZID": {"dataType": "int", "maxLength":"null"},"SYSTEMBLOCKED": {"dataType": "int", "maxLength":"null"},"ACCOUNTSTATEMENTDATE": {"dataType": "datetime", "maxLength":"null"},"ACCOUNTSTATEMENTNUM": {"dataType": "nvarchar", "maxLength":"20"},"CURRENCYCODE": {"dataType": "nvarchar", "maxLength":"3"},"ENDINGBALANCE": {"dataType": "numeric", "maxLength":"null"},"BANKRECONCILETYPE": {"dataType": "int", "maxLength":"null"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"CREATEDBY": {"dataType": "nvarchar", "maxLength":"20"}
        };
    }
}

module.exports = BPC_BANKRECONCILIATIONSTATEMENTHEADER;