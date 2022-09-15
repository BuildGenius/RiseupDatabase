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
    async chk_duplicated_user(LineID) {
        await this.Connect(this.config);
        let count = await this.conn.query(`SELECT COUNT(*) Count FROM USERS WHERE LineID = '${LineID}'`);

        return count.recordset[0].Count
    }
    async insert_user(LineID, Role) {
        let data;
        if (await this.chk_duplicated_user(LineID) == 0) {
            this.statement = `EXEC INSERT_USER @LineID = '${LineID}', @Role = '${Role}'`;
            await this.Connect(this.config);
            let response_data = await this.conn.query(this.statement);
            data = {status: true, userid: response_data.recordset[0].ID}
        } else {
            this.statement = `SELECT ID FROM USERS WHERE LineID = '${LineID}'`;
            await this.Connect(this.config);
            let response_data = await this.conn.query(this.statement);
            data = {status: false, message: `LineID '${LineID}' is Duplicated!`, userid: response_data.recordset[0].ID}
        }

        return data;
    }
    async update_user(ID, Role, Status = '1') {
        this.statement = `EXEC UPDATE_USER @ID = '${ID}', @Role = '${Role}', @Status = '${Status}'`
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
    async get_registered_user_all() {
        await this.Connect(this.config);
        let data = await this.conn.query('EXEC GET_REGISTERED_USER_ALL');

        return data;
    }
}

module.exports = USERS;