const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const passport = require('passport')

const Event = require('../../models/Event')
const validateEventInput = require('../../validation/events')

router.get('/', (req, res) => {
	Event.find()
		.sort({ start_date: -1 })
		.then(events => res.json(events))
		.catch(err => res.status(404).json({ noEventsFound: 'No events found' }))
})
