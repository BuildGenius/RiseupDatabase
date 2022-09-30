const Database = require('../Database');

class diskspace_log extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'diskspace_log';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"server name": {"dataType": "nvarchar", "maxLength":"150"},"available disk space": {"dataType": "float", "maxLength":"null"},"free disk space": {"dataType": "float", "maxLength":"null"},"total disk space": {"dataType": "float", "maxLength":"null"},"CreateAt": {"dataType": "datetime", "maxLength":"null"}
        };
    }
    async run(query) {
        await this.Connect(this.config);
        let response = await this.conn.query(query);

        return response;
    }
}

module.exports = diskspace_log;