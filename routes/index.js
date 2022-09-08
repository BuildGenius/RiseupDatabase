var express = require('express');
const Database = require('../bin/lib/sqlClass/Database');
var sql = require('../bin/lib/sqlClass/sqlSchema');
var mysql = require('mysql');
var config = require('../configuration.json').ITECToAX_REP;
var { LineClient } = require('messaging-api-line');
var router = express.Router();
const schema = new sql(config);
const crypto = require('crypto');

//line config
const client = new LineClient({
  accessToken: "fDlox1shrxTaCZJnFaNl55aVNDh/M1fxAL59kJ/a3ZI3ATi5EU1fu5jKJvLRQMGB0ffLFAzhQ6uOY7Jqy2MprwtWXr7pCbJ7fTfeuZ9CNHG/nHz+4RwyfccMyXeI8gas2XJSmoEK0DE9NGC5paKeZwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "104a6fa81b58e4eb79ecc51fc0dd0230"
});

/* GET home page. */
router.get('/', async function(req, res, next) {
  let tables = [];
  await schema.syncSchema();
  await schema.select("TABLES").get().then(result => {
    tables = result.recordset;
  });
  res.render('index', { title: 'SQL Express', Alltable: tables, active: 'home' });
});

router.get('/Signin', function (req, res) {
  res.render('signin', {title: 'Sign In'});
});

router.post('/getTable', async function(req, res){
  let db = new Database(config);
  let data;
  let selector = req.body.selector
  let column = await schema.select("COLUMNS").where(selector).get();
  db.table = selector;
  data = await db.select().get();
  
  res.status(200).json({column: column.recordset, data: data});
});

//line router
router.post('/webhook', async function (req, res) {
    let env = req.body.events[0].type;
    let destination = req.body.destination;
    let msg = req.body.events[0].message;
    let replyToken = req.body.events[0].replyToken
    const regex = /^[DP]+/gm;
    let dept = new ReceiptDeposit(config);
    
    if (env == 'message'&&(regex.exec(msg.text.toUpperCase()) !== null)) {
      let splittxt = msg.text.toUpperCase().split(/^[DP]+/);
      let dpNo = splittxt[(splittxt.length - 1)];
      let dpID = dpNo.split('-')[0];
      let dpBranch = dpNo.split('-')[1];
      
      dept.setLimit(1);
      let result = await dept.select("TransactionID").where("DepositID", dpID).where("DepositBranch", dpBranch).asc('TransactionID').get();

      if (result.length > 0) {
        await client.replyMessages(replyToken, [
          {
            type: 'text',
            text: 'TransactionID : ' + result[0].TransactionID
          }
        ]);
      }
      
    }

    res.json({});
});

module.exports = router;
