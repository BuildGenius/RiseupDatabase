var express = require('express');
var router = express.Router();
var md5 = require('md5');
var mysql = require('mysql');
const mysqlCommand = require('../bin/lib/sqlClass/mySqlCommand');
const config = require('../configuration.json').MISExpress;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/store', function (req, res) {
  let body = req.body;
  let d = new Date;
  let datetime = `${d.getFullYear()}-${("0" + (d.getMonth()+1)).slice(-2)}-${("0" + d.getDate()).slice(-2)} ${("0" + d.getHours()).slice(-2)}:${("0" + d.getMinutes()).slice(-2)}:${("0" + d.getSeconds()).slice(-2)}:${("0" + d.getMilliseconds()).slice(-4)}`;
  var userid;
  let userInfo;
  var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'misexpress'
  });

  conn.connect(err => {
    if (err) {
      throw err
    }
  });

  conn.query(`
    INSERT INTO users (email, firstname, lastname, password, displayname, createat, updateat)
    VALUES (
      '${body.username}',
      '${body.firstname}',
      '${body.lastname}',
      '${md5(body.password)}',
      '${body.displayname}',
      '${datetime}',
      '${datetime}'
    )`, function (err, result) {
      if (err) {
        throw err
      }

      conn.query(`
        SELECT * FROM users
        WHERE id = ${result.insertId}
      `, function (err, result) {
        if (err) {
          throw err
        }

        req.session.userid = result[0].id;
        req.session.email = result[0].email;
        req.session.firstname = result[0].firstname;
        req.session.lastname = result[0].lastname;
        req.session.displayname = result[0].displayname;

        res.json({userid: req.session.userid});
      });
    });
});

router.post('/signin', async function (req, res) {
  let data = req.body;
  let stm = new mysqlCommand(config);

  let response = await stm.from('users')
  .select()
  .where('email', data.username)
  .where('password', md5(data.password))
  .get();

  console.log(response.result);
});

router.post('/getAuth', function (req, res) {
  console.log(req.session);
  if (req.session.userid !== null) {
    res.json({status: true, redirectto: '/'});
  }
});

module.exports = router;
