const express = require('express')
const router = express.Router()

const loginController = require('../app/controllers/LoginController')

//POST /login/store
router.post('/store', loginController.store)

//GET /login
router.get('/', loginController.login)





module.exports = router;