var express = require("express");
var router = express.Router();
var uid = require('rand-token').uid;
var config = require('../configuration.json')["min-project"];
var call = require('../bin/lib/sqlClass/192.168.43.84-min-project/MIS_Express_call');
var user  = require('../bin/lib/sqlClass/192.168.43.84-min-project/USERS');

router.use('/getToken', async function (req, res) {
    console.log(req.session.lineID == undefined);
    if(req.session.lineID == undefined) {
        res.json({status: false});
    } else {
        var u = new user(config);
        let Token = uid(250);
        let res_userid = await u.select('ID').where('LineID', req.session.lineID).get();

        let c = new call(config);
        c.store_mis_express_call(Token, res_userid[0]['ID']);

        res.json({status: true, token: Token});
    }
});

module.exports = router;