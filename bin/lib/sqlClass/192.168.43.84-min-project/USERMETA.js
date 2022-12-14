const Database = require('../Database');

class USERMETA extends Database {
    constructor(configuration) {
        super(configuration);
        this.table = 'USERMETA';
        this.column = {
            "USERID": {"dataType": "int", "maxLength":"null"},"METAKEY": {"dataType": "nvarchar", "maxLength":"150"},"MEATAVALUE": {"dataType": "nvarchar", "maxLength":"200"}
        };
    }

    async getUserMeta(userid) {
        await this.Connect(this.config);
        let data = await this.conn.query(`EXEC GET_USER_META @USERID = '${userid}'`);

        return data.recordset[0];
    }

    async insert_usermeta (userid, metakey, metavalue) {
        await this.Connect(this.config);
        let data = await this.conn.query(`EXEC INSERT_USER_META @USERID = ${userid}, @METAKEY = ${metakey}, @METAVALUE = ${metavalue}`);

        return data;
    }

    async update_usermeta (userid, metakey, metavalue) {
        await this.Connect(this.config);
        let data = await this.conn.query(`EXEC UPDATE_USER_META @USERID = ${userid}, @METAKEY = ${metakey}, @METAVALUE = ${metavalue}`);

        return data;
    }

    async delete_usermeta (userid, metakey) {
        await this.Connect(this.config);
        let data = await this.conn.query(`EXEC DELETE_USER_META @USERID = ${userid}, @METAKEY = ${metakey}`);

        return data;
    }

    async insert_or_update_usermeta(userid, metakey, metavalue) {
        await this.Connect(this.config);
        let date = await this.conn.query(`EXEC INSERT_OR_UPDATE_USERMETA @IOUSERID = '${userid}', @IOMETAKEY = '${metakey}', @IOMETAVALUE = '${metavalue}'`);

        return date;
    }

    async get_userProfile_by_token (token) {
        await this.Connect(this.config);
        let data = await this.conn.query(`EXEC GET_USERPROFILE_BY_TOKEN @token = '${token}'`);

        return data;
    }
}

module.exports = USERMETA;