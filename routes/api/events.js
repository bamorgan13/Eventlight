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
	// const queryFilters = {
	// 	type: 'Festival',
	// 	category: 'Food & Drink',
	// 	start_date: 'June 13, 2019 11:13:00',
	// 	end_date: 'July 26, 2019 11:13:00',
	// 	city: { city: 'Dover', state: 'DE' }
	// }

	const queryFilters = req.query

	const populateFilters = {
		creator: { path: 'creator', select: 'full_name email' },
		type: { path: 'type' },
		category: { path: 'category' },
		city: { path: 'location.city' }
	}

	if (queryFilters.currentUserId) {
		populateFilters.creator.match = { _id: queryFilters.currentUserId }
	}
	if (queryFilters.type) {
		populateFilters.type.match = { name: queryFilters.type }
	}
	if (queryFilters.category) {
		populateFilters.category.match = { name: queryFilters.category }
	}
	if (queryFilters.city) {
		populateFilters.city.match = { city: queryFilters.city.city, state: queryFilters.city.state }
	}
	queryFilters.start_date = queryFilters.start_date ? new Date(queryFilters.start_date) : new Date()

	queryFilters.end_date = queryFilters.end_date
		? new Date(queryFilters.end_date)
		: new Date(9999, 11, 31, 23, 59, 59, 999)

	Event.find()
		.populate(populateFilters.creator)
		.populate(populateFilters.type)
		.populate(populateFilters.category)
		.populate(populateFilters.city)
		.where('start_date')
		.gte(queryFilters.start_date)
		.lte(queryFilters.end_date)
		.sort({ start_date: 1 })
		.then(events => {
			events = events.filter(event => event.creator && event.type && event.category && event.location.city)
			res.json(events)
		})
		.catch(err => {
			res.status(404).json({ noEventsFound: 'No events found' })
		})
})

router.get('/:id', (req, res) => {
	const eventId = req.query._id
	Event.findById(eventId)
		.populate({ path: 'location.city' })
		.then(event => res.json(event))
		.catch(err => res.status(404).json({ invalidEventId: 'Event not found' }))
})

module.exports = router
