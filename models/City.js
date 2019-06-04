const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
	city: { type: String, required: true },
	state: { type: String, required: true }
});
