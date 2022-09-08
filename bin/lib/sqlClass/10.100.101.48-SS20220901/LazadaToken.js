const Database = require('../Database');

class LazadaToken extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'LazadaToken';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"CodeFromCallbackUrl": {"dataType": "nvarchar", "maxLength":"100"},"RefreshToken": {"dataType": "nvarchar", "maxLength":"100"},"UTime": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = LazadaToken;