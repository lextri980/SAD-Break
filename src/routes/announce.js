const express = require('express')
const router = express.Router()

const announceController = require('../app/controllers/AnnounceController')

router.post('/store', announceController.store)
router.get('/', announceController.index)


module.exports = router;