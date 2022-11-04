const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.post('/admin/login',controller.LOGIN)
router.get('/admin/user',controller.GET)
router.put('/admin/:adminId',controller.PUT)
router.put('/admin/user/balance/:userId',controller.PUT_USER)

module.exports = router