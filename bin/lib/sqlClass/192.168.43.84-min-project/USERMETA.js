const Database = require('../Database');

class USERMETA extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'USERMETA';
        this.column = {
            "USERID": {"dataType": "int", "maxLength":"null"},"METAKEY": {"dataType": "nvarchar", "maxLength":"150"},"MEATAVALUE": {"dataType": "nvarchar", "maxLength":"200"}
        };
    }
}

module.exports = USERMETA;