const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/signup', (req, res, next) => {
  res.render('signup', { title: 'Auth-app' })
})

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Auth-app' })
})

module.exports = router
