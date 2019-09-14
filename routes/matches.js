const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('matches', { title: 'Matches page' })
})

module.exports = router
