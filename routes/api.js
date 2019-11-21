let express = require('express');
let router = express.Router();
let controller = require('./controller/apiController');

//api router
router.get('/idx', controller.idx);
module.exports = router;