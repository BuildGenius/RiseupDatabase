var express = require('express');
var router = express.Router();
var md5 = require('md5');
var mysql = require('mysql');
var USERS = require('../bin/lib/sqlClass/192.168.43.84-min-project/USERS');
const mysqlCommand = require('../bin/lib/sqlClass/mySqlCommand');
const config = require('../configuration.json').MISExpress;
const config_min = require('../configuration.json')['min-project'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/getRegistedUser', async function (req, res) {
  let u = new USERS(config_min);
  let users = await u.get_registered_user_all();

  res.json(users.recordset);
});

router.post('/update', async function (req, res) {
  let data = req.body;
  let role = 2;
  let status = 2;

  if (!data.status) {
    role = 0;
    status = 0;
  }
  
  let user = new USERS(config_min);
  let response = await user.update_user(data.data, role, status);

  console.log(response);
  res.json({status: "completed", message: 'this user approved!'});
});

router.post('/getAuth', function (req, res) {
  console.log(req.session);
  if (req.session.userid !== null) {
    res.json({status: true, redirectto: '/'});
  }
});

module.exports = router;
