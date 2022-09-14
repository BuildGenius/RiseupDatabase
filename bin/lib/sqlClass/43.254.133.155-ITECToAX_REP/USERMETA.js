const Database = require('../Database');

class USERMETA extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'USERMETA';
        this.column = {
            
        };
    }
}

module.exports = USERMETA;