const express = require('express')
const router = express.Router()

const {login, dashboard} = require('../controllers/main')

router.get('/dashboard')
router.post('/login')

module.exports = router