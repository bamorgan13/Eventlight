const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const image_storage_root = 'https://s3.amazonaws.com/whatever/'

const EventSchema = new Schema({
  title: {
    type: String,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  organizer_name: {
    type: String,
    index: true
  },
  organizer_description: {
    type: String
  },
  start_date: {
    type: Date,
    required: true,
    index: true
  },
  end_date: {
    type: Date,
    required: true
  },
  location: {
    location_name: {
      type: String,
      index: true
    },
    location_address: {
      type: String,
      required: true
    },
    city: {
      type: Schema.Types.ObjectId,
      ref: 'City'
    }
  },
  online_url: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: 'Type'
  },
  topic: {
    type: Schema.Types.ObjectId,
    ref: 'Topic'
  },
  capacity: {
    type: Number,
    required: true
  },
  image_url: {
    type: String,
    get: img_name => `${image_storage_root}${img_name}`
  }
})

module.exports = mongoose.model(
  'Event',
  EventSchema
)

