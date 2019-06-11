const express = require('express')
const router = express.Router()
const passport = require('passport')
const Event = require('../../models/Event')

router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	if (!req.user) {
		res.json({})
	} else {
		Event.find()
			.where('_id')
			.in(req.user.registrations)
			.sort({ start_date: 1 })
			.then(events => res.json(events))
	}
})

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const user = req.user
	const idx = user.registrations.indexOf(req.body.event_id)
	if (idx < 0) {
		user.registrations.push(req.body.event_id)
	}
	user.save().then(user => {
		const payload = {
			registrations: user.registrations
		}
		return res.json(payload)
	})
})

module.exports = router
