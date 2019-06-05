const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const Category = require('../../models/Category')
const Type = require('../../models/Type')
const City = require('../../models/City')

const Event = require('../../models/Event')
const validateEventInput = require('../../validation/events')

router.get('/', (req, res) => {
	Event.find()
		.populate('creator')
		.populate('type')
		.populate('category')
		.populate('location.city')
		.sort({ start_date: 1 })
		.then(events => res.json(events))
		.catch(err => res.status(404).json({ noEventsFound: 'No events found' }))
})

module.exports = router
