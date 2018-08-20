const express = require('express');
const router = express.Router();
const ctrl = require('../controller/loginController');

router.get('/',ctrl.get);
router.post('/',ctrl.post);

module.exports = router;  //bunu yaparsan router kullanabilirsin