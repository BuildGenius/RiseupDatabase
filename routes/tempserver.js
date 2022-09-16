var express = require('express');
var router = express.Router();
const config = require('../configuration.json').ITECToAX_REP;
var Buy = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/Buy');
const Invoice = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/Invoice');
const Deposit = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/Deposit');
const SI = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/SI');
const InventoryInOut = require('../bin/lib/sqlClass/43.254.133.155-ITECToAX_REP/InventoryInOut');

router.get('/Buy', async function (req, res) {
    let buy = new Buy(config);
    let data = await buy.select().desc('TransactionID').get();
    let defaultCommand = buy.select(buy.column).desc('TransactionID').toString();

    res.render('table', {"title": "Buy", column: buy.column, column: Object.keys(data[0]), data: data });
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