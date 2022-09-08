const mysqlConnect = require("./mySqlDB");

class mysqlCommand extends mysqlConnect {
    constructor(config) {
        super(config);
        this.Smt;
        this.tmp_select = [];
        this.Select;
        this.Table;
        this.Where
        this.Limit = 1000;
        this.Offset = 0;
        this.queryParm = [];
        this.method = "";
        this.result = {};
    }

    select() {
        this.method = "select";
        if (typeof arguments[0] == 'object') {
            this.Select = arguments[0].join(', ');
        } else if (typeof arguments[0] == 'string' && arguments.length > 1) {
            for (let i = 0; i < arguments.length;i++) {
                this.tmp_select.push(arguments[i]);
            }
            this.Select = this.tmp_select.join(', ');
        } else if (typeof arguments[0] == 'string' && arguments.length == 1) {
            this.tmp_select.push(arguments[0]);
            this.Select = this.tmp_select.join(', ');
        } else {
            this.Select = '*';
        }

        return this;
    }
    from (table) {
        this.Table = table;
        return this;
    }
    where(key, value, expression = '=') {
        if (expression !== '=') {
            this.queryParm.push(`${key} ${expression} '${value}'`);
        } else {
            this.queryParm.push(`${key} = '${value}'`);
        }

        this.Where = this.queryParm.join('\r\nAND\r\n\t');

        return this;
    }
    and () {

    }
    or() {

    }
    limit() {

    }
    offset() {

    }
    next() {

    }
    groupby() {

    }
    asc() {

    }
    desc() {

    }
    async get(query = true) {
        let result;
        if (this.method == 'select') {
            this.stm = `SELECT ${this.Select}\r\nFROM ${this.Table}\r\n\t`;
        }

        if (this.Where != "") {
            this.stm += 'WHERE\r\n' + this.Where;
        }

        if (query) {
            this.Connect();
            this.connectionConfig.query(this.stm, function (err, res) {
                if (err) throw err
                for (let i = 0;i < res.length;i++) {
                    for (let ii = 0;i < Object.keys(res[i]);ii++) {
                        this.result[Object.keys(res[i])[ii]] = Object.values(res[i])[ii];
                    }
                }
            });
            return this;
        } else {
            return this;
        }
    }
    toString () {
        return this.stm;
    }
}

module.exports = mysqlCommand;