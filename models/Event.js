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
	creator: {
		type: Schema.Types.ObjectId,
		ref: 'users'
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
	city: {
		type: Schema.Types.ObjectId,
		ref: 'cities'
	},
	online_url: {
		type: String
	},
	price: {
		type: Number,
		required: true
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'categories'
	},
	topic: {
		type: Schema.Types.ObjectId,
		ref: 'topics'
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
