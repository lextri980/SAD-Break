const express = require('express')
const router = express.Router()

const teacherController = require('../app/controllers/TeacherController')


router.get('/', teacherController.index)


module.exports = router;