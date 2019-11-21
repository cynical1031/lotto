var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});
router.get('/info', function(req, res, next) {
    res.render('info');
});

module.exports = router;