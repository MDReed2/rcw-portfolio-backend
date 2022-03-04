const mongoose = require('mongoose')

const suggestionsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  descriptions: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Suggestions', suggestionsSchema)
