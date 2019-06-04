const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Event = require('./Event')

const UserSchema = new Schema({
  email: {
    type: String,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    required: true,
    index: true
  },
  full_name: {
    type: String
  },
  password_digest: {
    type: String,
    require: true
  },
  liked_events: {
    type: [Schema.Types.ObjectId],
    ref: 'Event'
  }
})

module.exports = mongoose.model('User', UserSchema)
