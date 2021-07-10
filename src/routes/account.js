const express = require('express')
const router = express.Router()

const accountController = require('../app/controllers/AccountController')


router.post('/store', accountController.store)
router.get('/', accountController.show)


module.exports = router;