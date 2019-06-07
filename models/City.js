const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  city: { type: String, required: true, index: true },
  state: { type: String, required: true, index: true }
// }, {
//   toObject: { virtuals: true },
//   toJSON: { virtuals: true }
// })
})
// CitySchema.virtual("fullLocation").get(function() {
//   return `${this.city}, ${this.state}`;
// })

module.exports = mongoose.model(
  'City',
  CitySchema
)
