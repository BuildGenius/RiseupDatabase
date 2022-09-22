var express = require('express');
var router = express.Router();
const config = require('../configuration.json')['D365_20220831'];
const schema = require('../bin/lib/sqlClass/sqlSchema');
const onhand = require('../bin/lib/sqlClass/192.168.43.84-D365/BPC_INVENTONHAND');
const inventDim = require('../bin/lib/sqlClass/192.168.43.84-D365/INVENTDIM');
const inventSum = require('../bin/lib/sqlClass/192.168.43.84-D365/INVENTSUM');
const inventTrans = require('../bin/lib/sqlClass/192.168.43.84-D365/INVENTTRANS');
const CUSTINVOICEJOUR = require('../bin/lib/sqlClass/192.168.43.84-D365_20220831/CUSTINVOICEJOUR');

router.get('/BPC_INVENTONHAND', async (req, res) => {
    let scm = new schema(config);
    let tg_schema = await scm.select('columns').where('BPC_INVENTONHAND').get();
    // console.log(tg_schema);
    let oh = new onhand(config);
    let data = await oh.select(oh.column).get();

    res.render('table', {"title": "Inventory On-hand", column: oh.column, data: data });
});

router.get('/INVENTDIM', async (req, res) => {
    let invDim = new inventDim(config);
    let data = await invDim.select(invDim.column).get();

    res.render('table', {"title": "Inventory dimension", column: invDim.column, data: data });
});

router.get('/INVENTSUM', async (req, res) => {
    let invSum = new inventSum(config);
    let data = await invSum.select(invSum.column).get();

    res.render('table', {"title": "Inventory Summary", column: invSum.column, data: data });
});

router.get('/INVENTTRANS', async (req, res) => {
    let invtrns = new inventTrans(config);
    let data = await invtrns.select(invtrns.column).get();

    res.render('table', {"title": "Inventory Transaction", column: invtrns.column, data: data });
});

router.get('/CUSTINVOICEJOUR', async (req, res) => {
    let invoicejounal = new CUSTINVOICEJOUR(config);
    let data = await invoicejounal.select(invoicejounal.column).get();

    res.render('table', {title: 'CusTrans', column: Object.keys(data[0]), filterColumn: invoicejounal.column, data: data, active: 'CusInvoiceJour'});
})

module.exports = router;