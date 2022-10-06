var express = require('express');
const sqlSchema = require('../bin/lib/sqlClass/sqlSchema');
var router = express.Router();
const config = require('../configuration.json');

router.get('/tempServer', async function (req, res) {
    let tables;
    let alltbale;
    const schema = new sqlSchema(config.DIY_ITEC);
    await schema.syncSchema();
    tables = await schema.select("TABLES").get();

    alltbale = tables.recordset;
    res.render('index', {title : "tempserver", Alltable: alltbale, active: "tempserver"});
});

router.get('/SS20220901', async function (req, res) {
    let tables;
    let alltbale;
    const schema = new sqlSchema(config.server48SS20220901);
    // await schema.syncSchema('Stock');
    tables = await schema.select("TABLES").get();
    console.log(tables);

    alltbale = tables.recordset;
    res.render('index', {title : "SS20220901", Alltable: alltbale, active: "SS20220901"});
})

router.get('/MIS_DataCenter', async function (req, res) {
    let tables;
    let alltbale;
    const schema = new sqlSchema(config['min-project']);
    // await schema.syncSchema();
    tables = await schema.select("TABLES").get();

    alltbale = tables.recordset;
    res.render('index', {title : "MIS Data Center", Alltable: alltbale, active: "MIS_DataCenter"});
})

router.get('/D365_snapshot', async function (req, res) {
    let tables;
    let alltbale;
    const schema = new sqlSchema(config['D365_20220831']);
    // await schema.syncSchema('CUSTINVOICEJOUR');
    tables = await schema.select("TABLES").get();

    alltbale = tables.recordset;
    res.render('index', {title : "D365_snapshot", Alltable: alltbale, active: "D365_snapshot"});
});

module.exports = router;