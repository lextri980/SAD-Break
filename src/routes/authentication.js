const express = require('express')
const router = express.Router()

const authenticationController = require('../app/controllers/AuthenticationController')

//GET /authentication/login
router.get('/login', authenticationController.login)


module.exports = router;