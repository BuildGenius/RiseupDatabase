var express = require("express");
var router = express.Router();

router.post('/getToken', async function (req, res) {
    console.log(req.body);
    res.json(req.body);
});

module.exports = router;