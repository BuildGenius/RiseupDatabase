var express = require('express');
const Database = require('../bin/lib/sqlClass/Database');
const User = require('../bin/lib/sqlClass/192.168.43.84-min-project/USERS');
var sql = require('../bin/lib/sqlClass/sqlSchema');
var config = require('../configuration.json').ITECToAX_REP;
var config_min = require('../configuration.json')['min-project'];
var lineLogin = require('line-login');
var { LineClient } = require('messaging-api-line');
const USERMETA = require('../bin/lib/sqlClass/192.168.43.84-min-project/USERMETA');
var axios = require('axios').default;
var router = express.Router();
const schema = new sql(config);
const login = new lineLogin({
  channel_id: '1656660083',
  channel_secret: '17729285b1719d15e3a323c5e1c0d907',
  callback_url: 'https://0c8e-183-88-99-68.ap.ngrok.io/callback',
  scope: "openid profile",
  prompt: "consent",
  bot_prompt: "normal"
});
var index = require('../controllers/index.controllers');
const { response } = require('express');
//line config
const client = new LineClient({
  accessToken: "fDlox1shrxTaCZJnFaNl55aVNDh/M1fxAL59kJ/a3ZI3ATi5EU1fu5jKJvLRQMGB0ffLFAzhQ6uOY7Jqy2MprwtWXr7pCbJ7fTfeuZ9CNHG/nHz+4RwyfccMyXeI8gas2XJSmoEK0DE9NGC5paKeZwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "104a6fa81b58e4eb79ecc51fc0dd0230"
});

/* GET home page. */
router.get('/', async function(req, res, next) {
  let home = new index(req);

  if (home.redirectTo !== '') {
    res.redirect(home.redirectTo);
  } else {
    let tables = [];
    await schema.syncSchema();
    await schema.select("TABLES").get().then(result => {
      tables = result.recordset;
    });
    res.render('index', { 
      title: home.title,
      Alltable: tables,
      active: home.active_menu
    });
  }
});

router.use('/Signin', login.auth());

router.use('/callback', login.callback(async (req, res, next, token_response) => {
  /**
   * role number
   * 1 = 'guest' DEFAULT user register with login page
   * 2 = 'officer'
   * 3 = 'team leader'
   * 4 = 'manager/asst. manager'
   * 
   * 99 = 'admin'
   */
  req.session.lineID = token_response.id_token.sub;
  req.session.lineTokenID = token_response.access_token;
  req.session.lineDisplayName = token_response.id_token.name;
  req.session.lineProfile = token_response.id_token.picture;
  req.session.save();

  let user = new User(config_min);
  let userid = await user.insert_user(req.session.lineID, '1');

  if (userid.status) {
    res.redirect(`/setDefualtProfile?ID=${userid.userid}`);
  } else {
    let umt = new USERMETA(config_min);
    let data = await umt.getUserMeta(userid.userid);

    req.session.userDisplayName = data.displayName;
    req.session.userPosition = data.position;
    req.session.userEmail = data.email;
    req.session.userTeam = data.team;
    req.session.fullname = data.fullname;

    req.session.save();

    res.redirect(`/`);
  }
}, (req, res, next, error) => {
  // Failure callback
  res.status(400).json(error);
}))

router.get('/setDefualtProfile', async function (req, res) {
  let data = req.query;
  res.render('setprofile', {title: 'set new Profile', userid: data.ID});
});

router.post('/setDefaultProfile/save', async function (req, res) {
  let data = req.body;
  let userid = data.userid;
  let result = {};

  let UserMeta = new USERMETA(config_min);

  for (let i = 0;i < Object.keys(data).length;i++) {
    let key = Object.keys(data)[i];
    let val = Object.values(data)[i];

    if (key !== 'userid') {
      result[key] = await UserMeta.insert_or_update_usermeta(userid, key, val);
    }
  }
  
  res.json({status: "Completed!", message: "insert detail completed. please wait for admin accept you account."});
})

router.use('/signout', (req, res) => {
  req.session.destroy();

  res.json({status: true});
})

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
