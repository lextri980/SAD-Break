const express = require('express')
const router = express.Router()

const authenticationController = require('../app/controllers/AuthenticationController')

//GET /authentication/signup
router.get('/signup', authenticationController.signup)

//GET /authentication/login
router.get('/', authenticationController.login)





module.exports = router;