let mysql = require('mysql');

class mysqlConnect {
    constructor (config) {
        this.conn;
        this.config = config;
    }

    Connect () {
        this.connectionConfig = mysql.createConnection(this.config);

        this.connectionConfig.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');
        });

        return this;
    }
}

module.exports = mysqlConnect;