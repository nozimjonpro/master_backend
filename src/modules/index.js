const Auth = require('./admin/router.js');
const organizators  = require('./organizators/router.js')

module.exports = [
    Auth, organizators
]