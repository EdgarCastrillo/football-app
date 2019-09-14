const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

router.get('/', async (req, res, next) => {
  try {
    await fetch('https://apiv2.apifootball.com/?action=get_leagues&country_id=41&APIkey=a2007228fe6003dbd6016d3be506b3ecac06c228abf5e9bae3e8fce50204328b')
      .then(res => res.json())
      .then(json => {
        console.log(json)
        res.render('matches', { json })
      })
  } catch (error) {
    next(error)
  }
})

module.exports = router
