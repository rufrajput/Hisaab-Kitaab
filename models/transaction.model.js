const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  unitPrice: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  unit: {
    type: String,
    enum: ['TON','MON','KG', 'G'],
    required: true,
  },
  type: {
    type: String,
    enum: ['SALE', 'PURCHASE'],
    required: true,
  },
  inventoryItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inventory',
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

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
