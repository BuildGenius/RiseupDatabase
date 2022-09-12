var express = require("express");
var router = express.Router();

router.use('/getToken', async function (req, res) {
    req.session.history_uri = req.baseUrl;
    req.session.save();

    res.redirect('/Signin');
});

module.exports = router;