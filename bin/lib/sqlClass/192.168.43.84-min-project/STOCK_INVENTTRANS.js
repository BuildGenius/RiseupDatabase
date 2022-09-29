const Database = require('../Database');

class STOCK_INVENTTRANS extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'STOCK_INVENTTRANS';
        this.column = {
            "ITEMID": {"dataType": "nvarchar", "maxLength":"100"},"ITEMNAME": {"dataType": "nvarchar", "maxLength":"-1"},"QTY": {"dataType": "int", "maxLength":"null"},"COST": {"dataType": "money", "maxLength":"null"},"RECID": {"dataType": "nvarchar", "maxLength":"10"},"TRANSRECID": {"dataType": "nvarchar", "maxLength":"10"},"TRANSDATE": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = STOCK_INVENTTRANS;