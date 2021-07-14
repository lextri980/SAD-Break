const express = require('express')
const router = express.Router()
const logoutController = require('../app/controllers/LogoutController')




//GET /login
router.get('/', logoutController.logout )





module.exports = router;