const Database = require('../Database');

class USERS extends Database {
    constructor(configuration) {
         /**
         * role number
         * 1 = 'guest' DEFAULT user register with login page
         * 2 = 'officer'
         * 3 = 'team leader'
         * 4 = 'manager/asst. manager'
         * 
         * 99 = 'admin'
         * 
         * Status number
         * 
         * 1 = 'registered'
         * 2 = 'general'
         * 
         * 80 = 'cancel'
         */
        super(configuration);
        this.table = 'USERS';
        this.column = {
            "ID": {"dataType": "int", "maxLength":"null"},"LINEID": {"dataType": "nvarchar", "maxLength":"50"},"ROLE": {"dataType": "int", "maxLength":"null"},"Status": {"dataType": "int", "maxLength":"null"},"CreateAt": {"dataType": "datetime", "maxLength":"null"},"UpdateAt": {"dataType": "datetime", "maxLength":"null"}
        };
    }
    async insert_user(LineID, Role) {
        this.statement = `EXEC INSERT_USER @LineID = '${LineID}', @Role = '${Role}'`;
        await this.Connect(this.config);
        let data = await this.conn.query(this.statement);

        return data;
    }
    async update_user(LineID, Role, Status = '1') {
        this.statement = `EXEC UPDATE_USER @LineID = '${LineID}', @Role = '${Role}', @Status = '${Status}'`
        await this.Connect(this.config);
        let data = await this.conn.query(this.statement);

        return data;
    }
    async delete_user(LineID) {
        this.statement = `EXEC DELETE_USER @LineID = '${LineID}'`
        await this.Connect(this.config);
        let data = await this.conn.query(this.statement);

        return data;
    }
}

module.exports = USERS;