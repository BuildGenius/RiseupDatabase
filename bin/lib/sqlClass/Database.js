const e = require('express');
const sql = require('mssql');

class Database {
    constructor(configuration){
        this.conn = "";
        this.config = {};
        let datetime_notdash = /[\.\/\-]/m;
        let datetime_dash = '-';
        this.SetConfig(configuration);
        this.statement = "";
        this.return = true;
        this.output = '';
        this.Values;
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
                "data": {},
                "mulvalue": true
            },
            "IsNotOneOf": {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {},
                "mulvalue": true
            },
            "IsNot": {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {}
            },
            "Between": {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {},
                "mulvalue": true
            },
            "IsNull" : {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {}
            },
            "IsNotNull" : {
                "type": ['string', 'int', 'datetime', 'date'],
                "data": {}
            },
            "beginWith" : {
                "type": ['string'],
                "data": {}
            },
            "not_beginWith" : {
                "type": ['string'],
                "data": {}
            },
            "endWith" : {
                "type": ['string'],
                "data": {}
            },
            "notendWith" : {
                "type": ['string'],
                "data": {}
            },
            "constain" : {
                "type": ['string'],
                "data": {}
            },
            "notConstain": {
                "type": ['string'],
                "data": {}
            },
            "before" : {
                "type": ['datetime', 'date'],
                "data": {}
            },
            "after" : {
                "type": ['datetime', 'date'],
                "data": {}
            },
            "between_date" : {
                "type": ['datetime', 'date'],
                "data": {}
            },
            "date_equal": {
                "type": ['datetime', 'date'],
                "data": {}
            }
        };

        this.And = false;
        this.Or = false;
        this.Not = false;
        this.order = [];
        this.Where = false;
        this.limit = 20;
        this.page = 0;
        this.offset = 0;

        this.setOffset();
    }
    SetConfig(configuration) {
        this.config = configuration;
        return this;
    }
    async Connect(config = '') {
        if (config == '') {
            this.conn = await sql.connect(this.config);
        } else {
            this.conn = await sql.connect(config);
        }
        
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
    insert(){
        this.statementType = 'insert';
        return this;
    }
    setReturn(returned = false) {
        this.return = returned;
        return this;
    }
    values(values){
        if (this.statementType == 'insert') {
            this.Values = values;
        } else if (this.statementType == 'update') {

        } else if (this.statementType == 'delete') {

        }

        return this;
    }
    async save() {
        if (this.statementType == 'insert') {
            this.output = 'OUTPUT inserted.*';
            this.statement = `INSERT INTO [${this.config.database}].[dbo].[${this.table}] (${Object.keys(this.Values).join(', ')})\r\n${this.output}\r\nVALUES\r\n\t(`;
            // this.statement += Object.values(this.Values).join('\r\n\t');

            for (let i = 0;i < Object.values(this.Values).length;i++) {
                this.statement += `'${Object.values(this.Values)[i]}'`;
                
                if (i < (Object.values(this.Values).length - 1)) {
                    this.statement += `,\r\n\t`
                }
            }

            this.statement += ')';
        } else if (this.statementType == 'update') {
            this.output = 'OUTPUT inserted.*, deleted.*';
        } else if (this.statementType == 'delete') {
            this.output = 'OUTPUT deleted.*';
        }

        await this.Connect(this.config);
        let response = await this.conn.query(this.statement);
        this.response = response;

        return response.recordset;
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
    setOffset() {
        if (this.page > 0) {
            this.offset = this.limit * this.page;
        } else {
            this.offset = 0;
        }

        return this.And;
    }
    where(){
        this.Where = true;
        if (arguments.length == 3) {
            switch(arguments[2]) {
                case 'equal' :
                    this.equal(arguments[0], arguments[1]); 
                break;
                case 'is_one_of' :
                    this.is_one_of(arguments[0], arguments[1]);
                break;
                case 'is_not_one_of' :
                    this.is_not_one_of(arguments[0], arguments[1]);
                break;
                case 'is_not' :
                    this.is_not(arguments[0], arguments[1]);    
                break;
                case 'between':
                    this.between(arguments[0], arguments[1]); 
                break;
                case 'greater_than':
                    this.greatethan(arguments[0], arguments[1]); 
                break;
                case 'greater_than_or_equal':
                    this.greaterthan_or_equal(arguments[0], arguments[1]);
                break;
                case 'less_than':
                    this.lessthan(arguments[0], arguments[1]);
                break;
                case 'less_than_or_equal':
                    this.lessthan_or_equal(arguments[0], arguments[1]);
                break;
                case 'is_null':
                    this.isnull(arguments[0], arguments[1]);
                break;
                case 'is_not_null': 
                    this.isnotnull(arguments[0], arguments[1]);
                break;
                case 'begin_with':
                    this.beginwith(arguments[0], arguments[1]);
                break;
                case 'not_begin_with':
                    this.not_beginWith(arguments[0], arguments[1]);
                break;
                case 'end_with':
                    this.endwith(arguments[0], arguments[1]);
                break;
                case 'not_end_with':
                    this.Notendwith(arguments[0], arguments[1]);
                break;
                case 'constain':
                    this.constain(arguments[0], arguments[1]);
                break;
                case 'not_contain':
                    this.notConstain(arguments[0], arguments[1]);
                break;
                case 'date_equal': 
                    this.date_equal(arguments[0], arguments[1]);
                break;
                case 'before': 
                    this.before(arguments[0], arguments[1]);
                break;
                case 'after': 
                    this.after(arguments[0], arguments[1]);
                break;
                case 'date_between':
                    this.date_between(arguments[0], arguments[1]);
                break;
                default :
                    this.equal(arguments[0], arguments[1]); 
                break;
            }
        } else {
            this.equal(arguments[0], arguments[1]);
        }

        return this;
    }
    or(){

    }
    equal(key, value) {
        this.opearte.equal.data[key] = value;
        return this;
    }
    date_equal(key, value) {
        this.opearte.equal.data[key] = value;
        return this;
    }
    is_one_of (key, value) {
        this.IsOneOf[key] = value;
        this.opearte.IsOneOf.data[key] = value;
        return this;
    }
    is_not_one_of (key, value) {
        this.opearte.IsNotOneOf.data[key] = value;
        return this;
    }
    is_not (key, value) {
        this.opearte.IsNot.data[key] = value;
        return this;
    }
    between (key, value) {
        this.opearte.Between.data[key] = value;
        return this;
    }
    greatethan (key, value) {
        this.opearte.GreateThan.data[key] = value;
        return this;
    }
    greaterthan_or_equal (key, value) {
        this.opearte.GreaterThanOrEqual.data[key] = value;
        return this;
    }
    lessthan (key, value) {
        this.opearte.LessThan.data[key] = value;
        return this;
    }
    lessthan_or_equal (key, value) {
        this.opearte.LessThanOrEqual.data[key] = value;
        return this;
    }
    isnull (key, value) {
        this.opearte.IsNull.data[key] = value;
        return this;
    }
    isnotnull (key, value) {
        this.opearte.IsNotNull.data[key] = value;
        return this;
    }
    beginwith (key, value) {
        this.opearte.beginWith.data[key] = value;
        return this;
    }
    Notbeginwith (key, value) {
        this.opearte.not_beginWith.data[key] = value;
        return this;
    }
    endwith (key, value) {
        this.opearte.endWith.data[key] = value;
        return this;
    }
    Notendwith (key, value) {
        this.opearte.notendWith.data[key] = value;
        return this;
    }
    constain (key, value) {
        this.opearte.constain.data[key] = value;
        return this;
    }
    notConstain (key, value) {
        this.opearte.notConstain.data[key] = value;
        return this;
    }
    before (key, value) {
        this.opearte.before.data[key] = value;
        return this;
    }
    after (key, value) {
        this.opearte.after.data[key] = value;
        return this;
    }
    date_between (key, value) {
        this.opearte.between_date.data[key] = value;
        return this;
    }
    async get(query = true){
        let data;
        switch (this.statementType) {
            case "select" : 
                this.statement = `SELECT\t${this.selector}\r\nFROM\r\n\t[${this.config.database}].[dbo].[${this.table}]`;
            break;
        }

        if (this.Where) {
            this.statement += `\r\nWHERE`;
            for (let i = 0;i < Object.keys(this.opearte).length;i++) {
                let operade = Object.keys(this.opearte)[i];
                let data = this.opearte[operade].data

                if (Object.values(this.opearte[operade].data).length > 0) {
                    for (let ii = 0;ii < Object.keys(data).length;ii++) {
                        switch(operade) {
                            case 'equal' :
                                this.statement += `\r\n\t${Object.keys(data)[ii]} = '${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'IsOneOf' :
                                this.statement += `\r\n\t${Object.keys(data)[ii]} IN (${Object.values(data)[ii].map((value, index, array) => {
                                    if (index !== array.length) {
                                        return `'${value}', `;
                                    } else {
                                        return `'${value}'`;
                                    }
                                })})\r\n`
                            break;
                            case 'IsNotOneOf' :
                                this.statement += `\r\n\t${Object.keys(data)[ii]} NOT IN (${Object.values(data)[ii].map((value, index, array) => {
                                    if (index !== array.length) {
                                        return `'${value}', `;
                                    } else {
                                        return `'${value}'`;
                                    }
                                })})\r\n`
                            break;
                            case 'IsNot' :
                                this.statement += `\r\n\t${Object.keys(data)[ii]} <> '${Object.values(data)[ii]}'\r\n` 
                            break;
                            case 'Between':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} BETWEEN '${Object.values(data)[ii][0]}' AND '${Object.values(data)[ii][1]}'\r\n`
                            break;
                            case 'GreateThan':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} > '${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'GreaterThanOrEqual':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} >= '${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'LessThan':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} < '${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'lessthan_or_equal':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} <= '${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'IsNull':
                                this.statement += `\r\n\t${Object.value(data)[ii].join()} IS NULL'\r\n`
                            break;
                            case 'isnotnull': 
                            this.statement += `\r\n\t${Object.value(data)[ii].join()} IS NOT NULL'\r\n`
                            break;
                            case 'beginWith':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} LIKE '${Object.values(data)[ii]}%'\r\n`
                            break;
                            case 'Notbeginwith':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} NOT LIKE '${Object.values(data)[ii]}%'\r\n`
                            break;
                            case 'endWith':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} LIKE '%${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'Notendwith':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} NOT LIKE '%${Object.values(data)[ii]}'\r\n`
                            break;
                            case 'constain':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} LIKE '%${Object.values(data)[ii]}%'\r\n`
                            break;
                            case 'notConstain':
                                this.statement += `\r\n\t${Object.keys(data)[ii]} NOT LIKE '%${Object.values(data)[ii]}%'\r\n`
                            break;
                            case 'before': 
                                if (Object.keys(data)[ii]['type'] == 'date') {
                                    this.statement += `\r\n\tCAST(${Object.keys(data)[ii]} as date) < '${Object.values(data)[ii]}'\r\n`
                                } else {
                                    this.statement += `\r\n\t${Object.keys(data)[ii]} < '${Object.values(data)[ii]}'\r\n`
                                }
                            break;
                            case 'after': 
                            if (Object.keys(data)[ii]['type'] == 'date') {
                                this.statement += `\r\n\tCAST(${Object.keys(data)[ii]} as date) > '${Object.values(data)[ii]}'\r\n`
                            } else {
                                this.statement += `\r\n\t${Object.keys(data)[ii]} > '${Object.values(data)[ii]}'\r\n`
                            }
                            break;
                            case 'between_date': 
                            if (Object.keys(data)[ii]['type'] == 'date') {
                                this.statement += `\r\n\tCAST(${Object.keys(data)[ii]} as date) BETWEEN '${Object.values(data)[ii][0].replace(this.datetime_notdash, this.datetime_dash).replace('T', ' ')}' AND '${Object.values(data)[ii][1].replace(this.datetime_notdash, this.datetime_dash).replace('T', ' ')}'\r\n`
                            } else {
                                this.statement += `\r\n\t${Object.keys(data)[ii]} BETWEEN '${Object.values(data)[ii][0].replace(this.datetime_notdash, this.datetime_dash).replace('T', ' ')}' AND '${Object.values(data)[ii][1].replace(this.datetime_notdash, this.datetime_dash).replace('T', ' ')}'\r\n`
                            }
                            break;
                            case 'date_equal': 
                            if (Object.keys(data)[ii]['type'] == 'date') {
                                this.statement += `\r\n\tCAST(${Object.keys(data)[ii]} as date) = '${Object.values(data)[ii]}'\r\n`
                            } else {
                                this.statement += `\r\n\t${Object.keys(data)[ii]} = '${Object.values(data)[ii]}'\r\n`
                            }
                            break;
                            default :
                                this.statement += `\r\n\t${Object.keys(data)[ii]} = '${Object.values(data)[ii]}'\r\n`
                            break;
                        }

                        if (ii != (Object.keys(data).length - 1) && (!this.And && !this.Or && !this.Not)) {
                            this.statement += `\r\n\tAND\r\n\t`;
                        } else if (ii != (Object.keys(data).length - 1) && (this.And && !this.Or && !this.Not)) {
                            this.statement += `\r\n\tAND\r\n\t`;
                        } else if (ii != (Object.keys(data).length - 1) && (!this.And && this.Or && !this.Not)) {
                            this.statement += `\r\n\tOR\r\n\t`;
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
            default:
                this.statement += `\r\nORDER BY\r\n\t${Object.keys(this.column)[0]}\r\nASC`
            break;
        }

        if (this.statementType == 'select') {
            this.statement += `\r\nOFFSET ${this.offset} ROWS\r\n
            FETCH FIRST ${this.limit} ROWS ONLY`
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