const mongoose = require('mongoose');

const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Size', sizeSchema);