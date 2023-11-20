const express = require('express');
const router = express.Router();

mainpage = require('../controllers/mainPageCont');

router.get('/',mainpage.mainPage);






module.exports = router;