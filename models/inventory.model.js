const mongoose = require('mongoose');

const InventoryItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
  salePrice: {
    type: Number,
    required: true,
  },
  precedence: {
    type: Number,
    required: true,
  },
  updatedToServer: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  }
});

module.exports = mongoose.model('Inventory', InventoryItemSchema);
