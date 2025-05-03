const Transaction = require('../models/transaction.model');
const InventoryItem = require('../models/inventory.model'); // assuming you have InventoryItem model

// Add a transaction
exports.addTransaction = async (req, res) => {
  try {
    const transactionData = req.body;
    const newTransaction = new Transaction(transactionData);
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ message: 'Error adding transaction', error: err });
  }
};

// Update a transaction
exports.updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const transaction = await Transaction.findByIdAndUpdate(id, updatedData, { new: true });
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ message: 'Error updating transaction', error: err });
  }
};

// Delete a transaction
exports.deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const transaction = await Transaction.findByIdAndDelete(id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting transaction', error: err });
  }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions', error: err });
  }
};

// Get transactions between specific start and end date
exports.getTransactionsByDateRange = async (req, res) => {
  const { startDate, endDate } = req.query;
  try {
    const transactions = await Transaction.find({
      createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) }
    });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions', error: err });
  }
};

// Get all purchase transactions
exports.getPurchaseTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ type: 'PURCHASE' });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching purchase transactions', error: err });
  }
};

// Get all sale transactions
exports.getSaleTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ type: 'SALE' });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching sale transactions', error: err });
  }
};

// Get all transactions for a specific inventory item
exports.getTransactionsByInventoryId = async (req, res) => {
  const { inventoryItemId } = req.params;
  try {
    const transactions = await Transaction.find({ inventoryItemId });
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching transactions for inventory', error: err });
  }
};
