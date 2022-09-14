const Database = require('../Database');

class USERS extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'USERS';
        this.column = {
            
        };
    }
}

module.exports = USERS;