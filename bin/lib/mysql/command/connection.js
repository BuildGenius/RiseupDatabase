var mysql = require('mysql');

class Connection {
    constructor(config) {
        this.config = config;
        this.conn;
    }
    Connect () {
        var connection = mysql.createConnection(this.config);
        this.conn = connection.connect();

        return this;
    }
}

module.exports = Connection;