const Database = require('../Database');

class lrv_personal_access_tokens extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_personal_access_tokens';
        this.column = {
            
        };
    }
}

module.exports = lrv_personal_access_tokens;