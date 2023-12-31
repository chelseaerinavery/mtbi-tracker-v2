const express = require('express')
const router = express.Router()

// @desc Login/Landing 
// @route GET / 
router.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    })
})

// @desc Dashboard
// @route GET / 
router.get('/dashboard', (req, res) => {
    res.render('Dashboard')
})

module.exports = router