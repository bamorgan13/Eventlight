const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	event: {
		type: Schema.Types.ObjectId,
		ref: 'events'
	}
});

module.exports = Registration = mongoose.model('registrations', RegistrationSchema);
