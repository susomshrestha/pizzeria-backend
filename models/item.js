const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  },
  imageUrl: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  sizes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Size',
    }
  ]
})

module.exports = mongoose.model('Item', itemSchema);