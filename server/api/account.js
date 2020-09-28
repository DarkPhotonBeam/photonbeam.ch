const express = require('express')
const utils = require('../util/utils.js')
const router = express.Router()

router.route('/')
    .post((req, res) => {
        const code = utils.genRandomString(16)
        res.json({ error: "Error" })
    })

router.route('/verify/:id/:code')
    .get((req, res) => {
        res.json({id: req.params.id, code: req.params.code})
    })

router.route('/auth/refresh_token')
    .post((req, res) => {
        res.json()
    })

module.exports = router