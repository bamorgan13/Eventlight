const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	event: {
		type: Schema.Types.ObjectId,
		ref: 'Event'
	}
});

module.exports = mongoose.model('Registration', RegistrationSchema);
