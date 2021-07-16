const express = require('express')
const router = express.Router()

const subjectController = require('../app/controllers/SubjectController')


router.get('/', subjectController.index)


module.exports = router;