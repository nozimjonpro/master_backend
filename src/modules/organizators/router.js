const router = require('express').Router()
const controller = require('./controller.js')

router.get('/organizators', controller.GET);
router.get('/organizators/:organizatorId', controller.GET);


module.exports = router;