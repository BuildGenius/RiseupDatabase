const Database = require('../Database');

class MSsnapshotdeliveryprogress extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'MSsnapshotdeliveryprogress';
        this.column = {
            "session_token": {"dataType": "nvarchar", "maxLength":"260"},"progress_token_hash": {"dataType": "int", "maxLength":"null"},"progress_token": {"dataType": "nvarchar", "maxLength":"500"},"progress_timestamp": {"dataType": "datetime", "maxLength":"null"}
        };
    }
}

module.exports = MSsnapshotdeliveryprogress;