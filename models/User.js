const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: {
		type: String,
		required: true
	},
	full_name: {
		type: String
	},
	password_digest: {
		type: String,
		require: true
	},
	liked_events: {
		type: Array,
		default: []
	}
});

module.exports = User = mongoose.model('users', UserSchema);
