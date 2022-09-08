var express = require('express');
var router = express.Router();
const config = require('../configuration.json').server48SS20220901;
const stock = require('../bin/lib/sqlClass/10.100.101.48-SS20220901/Stock');

router.get('/Stock', async (req, res) => {
    let stk = new stock(config);
    let data = await stk.select(stk.column).get();

    res.render('table', {"title": "Stock", column: stk.column, data: data });
});

module.exports = router;