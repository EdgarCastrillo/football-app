const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('Funciona')
  res.render('index', { title: 'Football-app' })
})

module.exports = router
