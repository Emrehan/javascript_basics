const express = require('express');
const router = express.Router();
const ctrl = require('../controller/indexController');

router.get('/',ctrl.index);
//router.get('/login',ctrl.deneme());

module.exports = router;  //bunu yaparsan router kullanabilirsin