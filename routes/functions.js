var sql = require('mssql');
var express = require('express');
var router = express.Router();
var rvdeposit = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/ReceiptDeposit');
var CustTrans = require('../bin/lib/sqlClass/192.168.43.84-D365_20220916/CUSTTRANS');
const config = require('../configuration.json')['min-project'];
const config_itec = require('../configuration.json')['DIY_ITEC'];
const config_test = require('../configuration.json').SS20220916;

router.get('/getTransaction/:page?', async function (req, res) {
    let dept = new rvdeposit(config);
    let params = req.params;
    dept.setLimit(50);
    dept.setOffset(params.page > 0 ? params.page:0);
    
    let data = await dept.select().desc("TransactionID").get();

    res.render('table', {title: 'fix TransactionID Demo', column: Object.keys(data[0]), filterColumn: dept.column, data: data, active: 'fix Transaction Demo'});
});

router.get('/changeStatusTransfer', async function (req, res) {
    // req.sessionStore.all((err, sess) => {
    //     console.log(sess)
    // })
    let d = new Date;
    let currentDate = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate() - 1}`;
    let dept = new rvdeposit(config);
    console.log(dept.column);
    let data = await dept.select().where("CAST(CrTime as date)", currentDate).desc("TransactionID").get();

    res.render('cng_st_function', {title: 'Change Status Transfer', column: Object.keys(data[0]), filterColumn: dept.column, data: data, active: 'changeStatusTransfer'});
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
    let dept = new rvdeposit(config_itec);
    dept.select()
    
    for (let i = 0;i < Object.keys(data).length;i++) {
        if (Object.values(data)[i]['value'] !== '') {
            dept.where(Object.keys(data)[i], Object.values(data)[i]['value'], Object.values(data)[i]['option']);
        }
    }

    let dp = await dept.get(false);
    console.log(dp.toString());

    let resdata = await dept.get();
    res.json(resdata);
});

router.get('/getCustTrans/:page?',async function (req, res) {
    let Cusrans = new CustTrans(config_test);
    let params = req.params;
    Cusrans.setLimit(100);
    Cusrans.setOffset(params.page > 0 ? params.page:0);
    let data = await Cusrans.select('ACCOUNTNUM', 'AMOUNTMST','SETTLEAMOUNTMST' , '(AMOUNTMST-SETTLEAMOUNTMST) as Balance' , 'INVOICE', 'VOUCHER' , `CONVERT(varchar, DOCUMENTDATE, 103) DOCUMENTDATE`  , 'TXT').where('DATAAREAID', 'com7').get();

    res.render('table', {title: 'CusTrans', column: Object.keys(data[0]), filterColumn: Cusrans.column, data: data, active: 'CustTrans'});
})

module.exports = router;