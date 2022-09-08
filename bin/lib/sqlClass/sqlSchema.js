const db = require('../sqlClass/Database');
const fs = require('fs');

class sqlSchema extends db {
    constructor(configuration){
        super(configuration);
        this.table_name = false;
        this.table = {
            "TABLES" : "INFORMATION_SCHEMA.TABLES",
            "COLUMNS" : "INFORMATION_SCHEMA.COLUMNS"
        };
        this.selector = {
            "TABLES": "TABLE_NAME",
            "COLUMNS": "COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH"
        };
        this.statement = "";
    }
    select(schema = "TABLES") {
        this.table_name = true;
        let table = this.table[schema.toUpperCase()];
        let selector = this.selector[schema.toUpperCase()]

        this.statement = `SELECT\r\n\t${selector}\r\nFROM\r\n\t${table}`;
        return this;
    }
    where(table = "") {
        this.statement += `\r\nWHERE\r\n\tTABLE_SCHEMA = 'dbo'`
        this.statement += `\r\nAND\r\n\tTABLE_NAME = '${table}'`
        
        return this;
    }
    async chk_existing_file(filename, templateclass = 'table', extend = true){
        let dir = `./bin/lib/sqlClass/${this.config.server}-${this.config.database}`;

        if (fs.existsSync(dir + `/${filename}.js`)) {
            console.log('existing file Directory.');
        } else {
            let templateTable = filename;
            let column = await this.select("COLUMNS").where(filename).get();

            let template = fs.readFileSync('./bin/lib/sqlClass/sqlTable.txt', 'utf8', 'string');
            template = template.replace(/{ table }/gm, templateTable);
            let columns = [];

            for (let i = 0;i < column.recordset.length;i++) {
                columns.push(`"${column.recordset[i].COLUMN_NAME}": {"dataType": "${column.recordset[i].DATA_TYPE}", "maxLength":"${column.recordset[i].CHARACTER_MAXIMUM_LENGTH}"}`);
            }
            template = template.replace('{ column }', columns.join(','));

            await this.createFile(dir, filename, template);

            return;
        }
    }
    async chkDirectory(dir, make_directory = true) {
        if (!fs.existsSync(dir) && make_directory) {
            fs.mkdirSync(dir);
        }

        return fs.existsSync(dir);
    }
    async createFile(dir, filename, txt) {
        if (await this.chkDirectory(dir)) {
            fs.writeFileSync(`${dir}/${filename}.js`, txt);
        }
        
        return;
    }
    async syncSchema(tablename = null) {
        let tables = "";
        if (tablename != null) {
            tables = await this.select("TABLES").where(tablename).get();
        } else {
            tables = await this.select("TABLES").get();
        }
        
        
        for (let i = 0;i < tables.recordset.length;i++) {
            await this.chk_existing_file(tables.recordset[i].TABLE_NAME);
        }
    }
    async get() {
        await this.Connect();
        this.result = await this.conn.query(this.statement);
        await this.conn.close();

        return this.result;
    }
}

module.exports = sqlSchema;