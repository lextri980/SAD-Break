const express = require('express')
const router = express.Router()

const signupController = require('../app/controllers/SignupController')

//POST /signup/store
router.post('/store', signupController.store)

//GET /signup
router.get('/', signupController.signup)






module.exports = router;