const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
	user_id: {
		type: Number,
		required: true
	},
	event_id: {
		type: Number,
		required: true
	}
});
