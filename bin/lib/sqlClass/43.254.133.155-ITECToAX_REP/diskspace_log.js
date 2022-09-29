const Database = require('../Database');

class diskspace_log extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'diskspace_log';
        this.column = {
            
        };
    }
}

module.exports = diskspace_log;