const express = require('express')
const router = express.Router()
const passport = require('passport')

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const user = req.user
    const idx = user.liked_events.indexOf(req.body.event_id)
    if (idx < 0) {
      user.liked_events.push(req.body.event_id)
    } else {
      user.liked_events = user.liked_events
        .slice(0, idx)
        .concat(user.liked_events.slice(idx + 1))
    }
    user.save().then(user => {
      const payload = {
        liked_events: user.liked_events
      }
      return res.json(payload)
    })
  }
)

module.exports = router
