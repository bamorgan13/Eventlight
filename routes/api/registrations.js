const express = require('express')
const router = express.Router()
const passport = require('passport')
const Event = require('../../models/Event')

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    if (!req.user) {
      res.json({})
    } else {
      Event.find()
        .where('_id')
        .in(req.user.registrations)
        .sort({ start_date: 1 })
        .then(events => res.json(events))
    }
  }
)

module.exports = router
