const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	creator_id: {
		type: Number,
		required: true
	},
	organizer_name: {
		type: String
	},
	organizer_description: {
		type: String
	},
	start_date: {
		type: Date,
		required: true
	},
	end_date: {
		type: Date,
		required: true
	},
	location_name: {
		type: String
	},
	location_address: {
		type: String,
		required: true
	},
	city_id: {
		type: Number,
		required: true
	},
	online_url: {
		type: String
	},
	price: {
		type: Number,
		required: true
	},
	type_id: {
		type: Number,
		required: true
	},
	topic_id: {
		type: Number,
		required: true
	},
	capacity: {
		type: Number,
		required: true
	},
	image_url: {
		type: String
	}
});

module.exports = Event = mongoose.model('events', EventSchema);
