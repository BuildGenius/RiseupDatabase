const Database = require('../Database');

class lrv_failed_jobs extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'lrv_failed_jobs';
        this.column = {
            
        };
    }
}

module.exports = lrv_failed_jobs;