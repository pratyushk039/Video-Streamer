express = require('express')
router = express.Router();
const vidAPI = require('../controllers/vidAPI')

router.get('/video',vidAPI.vidAPI);

module.exports = router;