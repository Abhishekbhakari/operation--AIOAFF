const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  farmerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productName: { type: String, required: true },
  category: { type: String, required: true }, // e.g., Fruits, Vegetables, Grains
  price: { type: Number, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true }, // kg, quintal, etc.
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', productSchema);
