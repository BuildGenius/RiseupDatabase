const Database = require('../Database');

class APIRegisterMemberAPISaveLog extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'APIRegisterMemberAPISaveLog';
        this.column = {
            "CallAPIDateTime": {"dataType": "datetime", "maxLength":"null"},"RemoteIpAddress": {"dataType": "varchar", "maxLength":"100"},"RequestLog": {"dataType": "varchar", "maxLength":"-1"},"ResponseLog": {"dataType": "varchar", "maxLength":"-1"}
        };
    }
}

module.exports = APIRegisterMemberAPISaveLog;