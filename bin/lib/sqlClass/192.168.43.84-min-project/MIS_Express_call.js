const Database = require('../Database');

class MIS_Express_call extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'MIS_Express_call';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"Token": {"dataType": "nvarchar", "maxLength":"250"},"userid": {"dataType": "int", "maxLength":"null"},"expiresAt": {"dataType": "datetime", "maxLength":"null"},"CreateAt": {"dataType": "datetime", "maxLength":"null"}
        };
    }
    async store_mis_express_call(token, userid) {
        await this.Connect(this.config);
        await this.conn.query(`exec Store_MIS_Express_call @Token = '${token}', @userid = '${userid}'`);
        return this;
    }
}

module.exports = MIS_Express_call;