var express = require('express');
const Database = require('../bin/lib/sqlClass/Database');
const Users = require('../bin/lib/sqlClass/192.168.43.84-min-project/people');
var sql = require('../bin/lib/sqlClass/sqlSchema');
var config = require('../configuration.json').ITECToAX_REP;
var config_min = require('../configuration.json')['min-project'];
var lineLogin = require('line-login');
var { LineClient } = require('messaging-api-line');
var router = express.Router();

const schema = new sql(config);

const login = new lineLogin({
  channel_id: '1656660083',
  channel_secret: '17729285b1719d15e3a323c5e1c0d907',
  callback_url: 'https://9a5f-110-170-68-130.ap.ngrok.io/callback',
  scope: "openid profile",
  prompt: "consent",
  bot_prompt: "normal"
});

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

router.use('/Signin', login.auth());

router.use('/callback', login.callback((req, res, next, token_response) => {
  let user = Users(config_min);
  user.storeUser({
    "userId": token_response.id_token.sub,
    "access_token": token_response.access_token,
    "DisplayName": token_response.id_token.name,
    "ProfilePicture": token_response.id_token.picture
  })
  
  req.session.lineID = token_response.id_token.sub;
  req.session.lineTokenID = token_response.access_token;
  req.session.lineDisplayName = token_response.id_token.name;
  req.session.lineProfile = token_response.id_token.picture;

  req.session.save();
  // Success callback
  res.redirect('/setupProfile');
}, (req, res, next, error) => {
  // Failure callback
  res.status(400).json(error);
}))

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
