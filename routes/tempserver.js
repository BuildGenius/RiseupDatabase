var express = require('express');
var router = express.Router();
const config = require('../configuration.json').DIY_ITEC;
var Buy = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/Buy');
const Invoice = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/Invoice');
const Deposit = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/Deposit');
const SI = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/SI');
const InventoryInOut = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/InventoryInOut');

router.get('/Buy/:page?', async function (req, res) {
    let buy = new Buy(config);
    buy.setLimit(500);
    buy.page = req.params.page == undefined ? 0:(req.params.page - 1);
    let data = await buy.select(`row_number() OVER(Order by BuyID) [#]`, 'BuyID', 'BuyBranch', 'Product', 'Serial', 'Number', 'POID', 'POBranch', 'SupCode', 'DocRef', 'InvoiceDate')
    .desc('[#]')
    .get();
    // let defaultCommand = buy.select(buy.column).desc('TransactionID').toString();

    res.render('table', {"title": "Buy", filterColumn: buy.column, column: Object.keys(data[0]), data: data });
});

router.get('/Invoice', async function (req, res) {
    let inv = new Invoice(config);
    let data = await inv.select(inv.column).desc("transactionID").get();
    let defaultCommand = inv.select(inv.column).desc("transactionID").toString();

    res.render('table', {"title": "Invoice", column: inv.column, column: Object.keys(data[0]), data: data});
});

router.get('/deposit', async function (req, res) {
    let dept = new Deposit(config);
    let data = dept.select(dept.column).desc("TransactionID").get();
    let defaultCommand = dept.select(dept.column).desc("TransactionID").toString()
    console.log(defaultCommand);

    res.render('table', {"title": "Receipt Deposit", column: dept.column, column: Object.keys(data[0]), data: data});
});

router.get('/SI', async function (req, res) {
    let stkIn = new SI(config);
    let data = await stkIn.select().where("SIBranch", 4).where("CAST(CrTime as date)", '2022-09-01').get();
    let defaultCommand = await stkIn.select(stkIn.column).toString();

    res.render('table', {"title": "Transfer", filterColumn: stkIn.column, column: Object.keys(data[0]), data: data});
});

router.get('/InventoryInOut', async function (req, res) {
    let invinout = new InventoryInOut(config);
    let data = await invinout.select().where("CAST(CrTime as date)", '2022-09-01').get();

    res.render('table', {"title": "Transfer", filterColumn: invinout.column, column: Object.keys(data[0]), data: data});
})

module.exports = router;