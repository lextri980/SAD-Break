const express = require('express')
const router = express.Router()

const markController = require('../app/controllers/MarkController')


router.get('/', markController.index)


module.exports = router;