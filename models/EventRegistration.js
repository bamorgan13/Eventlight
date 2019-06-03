const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventRegistrationSchema = new Schema({
	user_id: {
		type: Number,
		required: true
	},
	event_id: {
		type: Number,
		required: true
	}
});
