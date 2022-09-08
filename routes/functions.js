var sql = require('mssql');
var express = require('express');
var router = express.Router();
var rvdeposit = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/ReceiptDeposit');
const config = require('../configuration.json').ITECToAX_REP;

router.get('/getTransaction', async function (req, res) {
    let dept = new rvdeposit(config);
    let data = await dept.select().desc("TransactionID").get();

    res.render('table', {title: 'fix TransactionID Demo', column: dept.column, data: data, active: 'fix Transaction Demo'});
});

router.get('/changeStatusTransfer', async function (req, res) {
    let d = new Date;
    let currentDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 1}`;
    let dept = new rvdeposit(config);
    let data = await dept.select().where("CAST(CrTime as date)", currentDate).desc("TransactionID").get();

    res.render('cng_st_function', {title: 'Change Status Transfer', column: dept.column, data: data, active: 'changeStatusTransfer'});
});

router.post('/changeStatusTransfer/exec', async function (req, res) {
    let data = req.body;
    sql.connect(config)
    .then(async (conn) => {
        let result = await conn.query(`
        DECLARE @OtherBranch NVARCHAR(3) = '${data.ID4Only == 'Yes' ? 'NO':'YES'}'
        DECLARE @CreateAt DATETIME = '${data.CreateDate}'
        
        IF @OtherBranch = 'YES'
            BEGIN
                UPDATE [ITECToAX_REP].[dbo].[SI]
                SET
                    BPC_status = NULL,
                    BPC_Remark = NULL,
                    BPC_StatusDatetime = NULL
                OUTPUT inserted.SIID, inserted.SIBranch
                WHERE BPC_status = '86' AND CAST(CrTime as date) = @CreateAt
            END
        ELSE
            BEGIN
                UPDATE [ITECToAX_REP].[dbo].[SI]
                SET
                    BPC_status = '86',
                    BPC_Remark = '___waiting___',
                    BPC_StatusDatetime = GETDATE()
                OUTPUT inserted.SIID, inserted.SIBranch
                WHERE SOBranch <> 4 AND CAST(CrTime as date) = @CreateAt
            END
        `);

        res.json({'status': 'Completed', 'Affect': result.recordset.length});
    })
    .catch(err => {console.log(err)});
});

router.post('/getTransaction/filter', async function (req, res) {
    let data = req.body;
    
    let dept = new rvdeposit(config);
    dept.select();
    
    for (let i = 0;i < Object.keys(data).length;i++) {
        dept.where(Object.keys(data)[i], Object.values(data)[i]);
    }
    
    let resdata = await dept.get();

    res.json(resdata);
});

module.exports = router;