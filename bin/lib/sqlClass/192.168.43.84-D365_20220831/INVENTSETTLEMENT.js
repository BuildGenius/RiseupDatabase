const Database = require('../Database');

class INVENTSETTLEMENT extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'INVENTSETTLEMENT';
        this.column = {
            "BALANCESHEETLEDGERDIMENSION": {"dataType": "bigint", "maxLength":"null"},"BALANCESHEETPOSTING": {"dataType": "int", "maxLength":"null"},"CANCELLED": {"dataType": "int", "maxLength":"null"},"COSTAMOUNTADJUSTMENT": {"dataType": "decimal", "maxLength":"null"},"COSTAMOUNTSETTLED": {"dataType": "decimal", "maxLength":"null"},"DEFAULTDIMENSION": {"dataType": "bigint", "maxLength":"null"},"INVENTTRANSCURRENCY_RU": {"dataType": "int", "maxLength":"null"},"INVENTTRANSID": {"dataType": "nvarchar", "maxLength":"40"},"ITEMGROUPID": {"dataType": "nvarchar", "maxLength":"10"},"ITEMID": {"dataType": "nvarchar", "maxLength":"20"},"MARKUPCODE_RU": {"dataType": "nvarchar", "maxLength":"10"},"OPERATIONSLEDGERDIMENSION": {"dataType": "bigint", "maxLength":"null"},"OPERATIONSPOSTING": {"dataType": "int", "maxLength":"null"},"PDSCWSETTLED": {"dataType": "decimal", "maxLength":"null"},"POSTED": {"dataType": "int", "maxLength":"null"},"QTYSETTLED": {"dataType": "decimal", "maxLength":"null"},"SETTLEMODEL": {"dataType": "int", "maxLength":"null"},"SETTLETRANSID": {"dataType": "nvarchar", "maxLength":"40"},"SETTLETYPE": {"dataType": "int", "maxLength":"null"},"TRANSBEGINTIME": {"dataType": "datetime2", "maxLength":"null"},"TRANSBEGINTIMETZID": {"dataType": "int", "maxLength":"null"},"TRANSDATE": {"dataType": "datetime2", "maxLength":"null"},"TRANSRECID": {"dataType": "bigint", "maxLength":"null"},"VENDACCOUNTMARKUP_RU": {"dataType": "nvarchar", "maxLength":"20"},"VENDINVOICEIDMARKUP_RU": {"dataType": "nvarchar", "maxLength":"40"},"VOUCHER": {"dataType": "nvarchar", "maxLength":"40"},"DATAAREAID": {"dataType": "nvarchar", "maxLength":"4"},"PARTITION": {"dataType": "bigint", "maxLength":"null"},"RECID": {"dataType": "bigint", "maxLength":"null"},"RECVERSION": {"dataType": "int", "maxLength":"null"},"QTY": {"dataType": "decimal", "maxLength":"null"},"ITMCOSTTRANSRECID": {"dataType": "bigint", "maxLength":"null"},"ITMCOSTTYPEID": {"dataType": "nvarchar", "maxLength":"40"}
        };
    }
}

module.exports = INVENTSETTLEMENT;