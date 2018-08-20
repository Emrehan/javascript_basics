const express = require('express');
const router = express.Router();
const ctrl = require('../controller/exampleController');

router.get('/',ctrl.index);

module.exports = router;  //bunu yaparsan rou-ter kullanabilirsin