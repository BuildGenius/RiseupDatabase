const Database = require('../Database');

class USERS extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'USERS';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"LINEID": {"dataType": "nvarchar", "maxLength":"50"},"ROLE": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CreateAt": {"dataType": "datetime", "maxLength":"null"},"UpdateAt": {"dataType": "datetime", "maxLength":"null"}
        };
    }
    // INSERT_USER() {
    //     this.statement = 'EXEC INSERT_USER @LineID = , @'
    // }
    // UPDATE_USER() {

    // }
    // DELETE_USER() {

    // }
}

module.exports = USERS;