const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: true,
  },
  priority: {
    type: String,
    default: 'low',
    enum: ['low', 'moderate', 'high'],
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Log', LogSchema);
