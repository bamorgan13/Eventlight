const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  name: { type: String, required: true, index: true }
})

module.exports = mongoose.model('Topic', TopicSchema)

