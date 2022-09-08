const sql = require('mssql');

class Database {
    constructor(configuration){
        this.conn = "";
        this.config = {};
        this.SetConfig(configuration);
        this.statement = "";
        this.opearte = {
            "equal": {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {}
            },
            "NotEqual": {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {}
            },
            "Constraint": {
                "type": ['string'],
                "data": {}
            },
            "GreaterThanOrEqual": {
                "type": ['int', 'datetime', 'date'],
                "data": {}
            },
            "LessThanOrEqual": {
                "type": ['int', 'datetime', 'date'],
                "data": {}
            },
            "LessThan": {
                "type": ['int', 'datetime', 'date'],
                "data": {}
            },
            "GreateThan": {
                "type": ['int', 'datetime', 'date'],
                "data": {}
            },
            "IsOneOf": {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {}
            },
            "Between": {
                "type": ['int', 'datetime', 'date'],
                "data": {}
            }
        };
        
        this.Equal = this.opearte.equal.data;
        this.NotEqual = this.opearte.NotEqual.data;
        this.Constraint = this.opearte.Constraint.data;
        this.GreateThan = this.opearte.GreateThan.data;
        this.GreaterThanOrEqual = this.opearte.GreaterThanOrEqual.data;
        this.LessThan = this.opearte.LessThan.data;
        this.LessThanOrEqual = this.opearte.LessThanOrEqual.data;
        this.IsOneOf = this.opearte.IsOneOf.data;
        this.Between = this.opearte.Between.data;

        this.And = false;
        this.Or = false;
        this.Not = false;
        this.order = [];
        this.Where = false;
        this.limit = 1000;
    }
    SetConfig(configuration) {
        this.config = configuration;
        return this;
    }
    async Connect() {
        this.conn = await sql.connect(this.config);
        return this;
    }
    async onCreate() {
        let columns = function (columns) {
            let column = [];
            for (let i = 0;i < Object.keys(columns).length;i++) {
                console.log(Object.keys(columns)[i], Object.values(column)[i]);
                // column.push(`${Object.keys(columns)[i].toUpperCase()} ${Object.values(column)[i].dataType.toUpperCase()}${Object.values(column)[i].maxLength != undefined ? `(${Object.values(column)[i].maxLength})`:''}`);
            }

            console.log(column);
        }

        console.log(columns(this.column));
        // this.createTable = `CREATE TABLE ${this.table} (
        // )`
    }
    async toString() {
        return await this.get(false);
    }
    select(input = []){
        this.statementType = 'select';
        
        if (arguments.length > 1) {
            this.selector = Object.values(arguments).join(',');
        } else {
            if (typeof arguments[0] == 'object') {
                this.selector = Object.keys(arguments[0]).join(',\r\n\t');
            } else if (typeof arguments[0] == 'string') {
                this.selector = arguments[0];
            } else {
                this.selector = "*";
            }
        }

        return this;
    }
    insert(){

    }
    update(){

    }
    delete(){

    }
    where(){
        if (arguments.length == 2) {
            this.Where = true;
            this.equal(arguments[0], arguments[1]);
        }

        return this;
    }
    or(){

    }
    equal(key, value) {
        this.Equal[key] = value;
        this.opearte.equal.data[key] = value;
        return this;
    }
    async get(query = true){
        let data;
        switch (this.statementType) {
            case "select" : 
                this.statement = `SELECT\tTOP(${this.limit})\r\n\t${this.selector}\r\nFROM\r\n\t${this.table}`;
            break;
        }

        if (this.Where) {
            this.statement += `\r\nWHERE`;
            for (let i = 0;i < Object.keys(this.opearte).length;i++) {
                let operade = Object.keys(this.opearte)[i];
                let data = this.opearte[operade].data

                if (Object.values(this.opearte[operade].data).length > 0) {
                    for (let ii = 0;ii < Object.keys(data).length;ii++) {
                        this.statement += `\r\n\t${Object.keys(data)[ii]} = '${Object.values(data)[ii]}'\r\n`

                        if (ii != (Object.keys(data).length - 1) && (!this.And && !this.Or && !this.Not)) {
                            this.statement += `\r\n\tAND\r\n\t`;
                        }
                    }
                }
            }
        }

        switch (this.orderType) {
            case "desc" :
                this.statement += `\r\nORDER BY\r\n\t${this.order.join(',')}\r\nDESC`
            break;
            case "asc" : 
                this.statement += `\r\nORDER BY\r\n\t${this.order.join(',')}\r\nASC`
            break;
        }

        if (query) {
            await this.Connect(this.config);
            data = await this.conn.query(this.statement);
            
            return data.recordset;
        } else {
            return this.statement;
        }
    }
    setLimit(limit = 1000) {
        this.limit = limit;
        return this;
    }
    setOrder (orderby) {
        for (let i = 0;i < orderby.length;i++) {
            this.order.push(orderby[i]);
        }

        return this;
    }
    asc() {
        this.orderType = 'asc';
        this.setOrder(arguments);

        return this;
    }
    desc () {
        this.orderType = 'desc';
        this.setOrder(arguments);

        return this;
    }
}

module.exports = Database;