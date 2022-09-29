const Database = require('../Database');

class INVENT extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'INVENT';
        this.column = {
            "DIMID": {"dataType": "int", "maxLength":"null"},"ITEMID": {"dataType": "int", "maxLength":"null"},"SERIALID": {"dataType": "nvarchar", "maxLength":"150"},"QTY": {"dataType": "int", "maxLength":"null"},"COSTADJUSTMENT": {"dataType": "money", "maxLength":"null"},"SUM_COSTADJUSTMENT": {"dataType": "money", "maxLength":"null"}
        };
    }
}

module.exports = INVENT;