var express = require('express');
const Database = require('../bin/lib/sqlClass/Database');
const User = require('../bin/lib/sqlClass/192.168.43.84-min-project/USERS');
var sql = require('../bin/lib/sqlClass/sqlSchema');
var config = require('../configuration.json').ITECToAX_REP;
var config_min = require('../configuration.json')['min-project'];
var credentials_line_login = require('../configuration-line.json')['line-login'].production;
var credentials_line_message = require('../configuration-line.json')['line-message'].production;
var lineLogin = require('line-login');
var { LineClient } = require('messaging-api-line');
const USERMETA = require('../bin/lib/sqlClass/192.168.43.84-min-project/USERMETA');
var axios = require('axios').default;
var router = express.Router();
const schema = new sql(config);
const login = new lineLogin(credentials_line_login);
var index = require('../controllers/index.controllers');
const { response } = require('express');
const client = new LineClient(credentials_line_message);
const disk = require('../models/diskspace');
const performance = require('../controllers/performances/diskspaces');
const api = require('../controllers/apis.controllers');


/* GET home page. */
router.get('/', async function(req, res, next) {
  let home = new index(req);

  // if (home.redirectTo !== '') {
  //   res.redirect(home.redirectTo);
  // } else {
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
  // }
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

router.post('/availablediskspcs/:serverName?', async function (req, res) {
    let dsk = new disk();
    let pmance = new performance;
    let availSpace = await dsk.getAvailableSpace(req.params.serverName);
    let totalSpace = await dsk.getTotalSpace(req.params.serverName);
    let dailyDataSize = await dsk.getdailyDataSize(req.params.serverName);

    let availableGb = pmance.converse(availSpace[0]['available disk space'], req.body['require-unit']);
    let totaldiskGb = pmance.converse(totalSpace[0]['total disk space'], req.body['require-unit']);
    let availableMb = pmance.converse(availSpace[0]['available disk space'], 'Megabytes');
    let incrementalMb = pmance.converse(dailyDataSize[0]['avgdatasize'], 'Megabytes');
    let availableDay = Math.floor(availableMb / incrementalMb);

    if (availableDay < 30) {
      availableDay = Math.floor(availableDay/7) + ' Weeks';
    } else if (availableDay < 365) {
      availableDay = Math.floor(availableDay/30) + ' Months';
    } else if (availableDay > 365) {
      availableDay = Math.floor(availableDay/365) + ' Years';
    } else {
      availableDay += ' Days'
    }

    res.json({'available': availableGb, 'total': totaldiskGb, 'avgIncrementPerDay': incrementalMb, 'availableDay': availableDay});
});

router.get('/requestApis', async function (req, res) {
  let apis = new api(req);

  res.json(apis);
});

module.exports = router;
