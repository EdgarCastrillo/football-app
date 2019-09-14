const bcrypt = require('bcrypt')
const saltRounds = 10
const express = require('express')

const User = require('../models/Users')
const router = express.Router()

router.get('/signup', (req, res, next) => {
  res.render('signup', { title: 'Auth-app' })
})

router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body
  try {
    const salt = bcrypt.genSaltSync(saltRounds)
    const hashedPassword = bcrypt.hashSync(password, salt)
    const user = await User.findOne({ username })
    if (user) {
      res.redirect('/auth/signup')
    } else {
      const newUser = User.create({
        username: username,
        password: hashedPassword
      })
      req.session.currentUser = newUser
      res.redirect('/')
    }
  } catch (error) {
    next(error)
  }
})

router.get('/login', (req, res, next) => {
  res.render('login')
})

router.post('/login', async (req, res, next) => {
  const { username, password } = req.body
  try {
    const user = await User.findOne({ username })
    if (!user) {
      return next()
    }
    // Login user
    if (bcrypt.compareSync(password, user.password)) {
      req.session.currentUser = user
      console.log(req.session.currentUser)
      res.redirect('/')
    } else {
      res.redirect('/auth/login')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/logout', (req, res, next) => {
  delete req.session.currentUser
  res.redirect('/auth/signup')
})

module.exports = router
