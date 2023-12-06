var express = require('express');
var router = express.Router();
const meetingsCtrl = require('../controllers/meetings')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', meetingsCtrl.index)
router.get('/new', meetingsCtrl.new)
route.get('/:id', meetingsCtrl.show)
router.post('/', meetingsCtrl.create)

module.exports = router;
