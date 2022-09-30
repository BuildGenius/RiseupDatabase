var sql = require('mssql');
var fs = require('fs');
const e = require('express');
var config_itec_rep = require('../configuration.json').DIY_ITEC;
var config_min = require('./configuration.json')['min-project'];

(async () => {
    sql.connect(config_itec_rep)
    .then(async (conn) => {
        let result = await conn.query(`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES 
        WHERE TABLE_CATALOG = 'ITECToAX' 
        AND TABLE_SCHEMA = 'dbo' 
        AND TABLE_TYPE = 'BASE TABLE'`);

        let sourceServ = '[43.254.133.155]';
        let sourceData = '[ITECToAX]';
        let destDatabese = '[min-project]';

        for (let i = 0;i < result.recordset.length;i++) {
            let infoTableColumns = await conn.query(`
            SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH 
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_CATALOG = 'ITECToAX' 
            AND TABLE_SCHEMA = 'dbo' 
            AND TABLE_NAME = '${result.recordset[i]['TABLE_NAME']}'`);

            let columns = [];
            let columns_w_datatype = [];
            for (let ii = 0;ii < infoTableColumns.recordset.length;ii++) {
                columns.push(`[${infoTableColumns.recordset[ii]['COLUMN_NAME']}]`);
                columns_w_datatype.push(`[${infoTableColumns.recordset[ii]['COLUMN_NAME']}] ${infoTableColumns.recordset[ii]['DATA_TYPE']}${infoTableColumns.recordset[ii]['CHARACTER_MAXIMUM_LENGTH'] == null ? '':infoTableColumns.recordset[ii]['CHARACTER_MAXIMUM_LENGTH'] > 0 ? '('+ infoTableColumns.recordset[ii]['CHARACTER_MAXIMUM_LENGTH'] +')':'(MAX)'}`)
            }

            let readfile = fs.readFileSync('./bin/lib/sqlClass/template_increment_push_table.txt', 'utf-8', 'string');
            readfile = readfile.replace(/{ source server }/gm, sourceServ);
            readfile = readfile.replace(/{ source database }/gm, sourceData);
            readfile = readfile.replace(/{ dest database }/gm, destDatabese);
            readfile = readfile.replace(/{ table }/gm, result.recordset[i]['TABLE_NAME']);
            readfile = readfile.replace(/{ columns }/gm, columns.join(',\r\n\t'));
            readfile = readfile.replace(/{ columns_w_datatype_n_maxlength }/gm, columns_w_datatype.join(',\r\n\t'));

            fs.writeFileSync(`./bin/lib/sqlClass/tmp/CREATE_SP_${result.recordset[i]['TABLE_NAME']}.sql`, readfile);
        }
    })
    .catch(err => console.log(err));
})();