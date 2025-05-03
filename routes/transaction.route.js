const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transaction.controller');

// Add a transaction
router.post('/', transactionController.addTransaction);

// Update a transaction
router.put('/:id', transactionController.updateTransaction);

// Delete a transaction
router.delete('/:id', transactionController.deleteTransaction);

// Get all transactions
router.get('/', transactionController.getAllTransactions);

// Get transactions between specific start and end date
router.get('/date-range', transactionController.getTransactionsByDateRange);

// Get all purchase transactions
router.get('/purchase', transactionController.getPurchaseTransactions);

// Get all sale transactions
router.get('/sale', transactionController.getSaleTransactions);

// Get all transactions for a specific inventory item
router.get('/inventory/:inventoryItemId', transactionController.getTransactionsByInventoryId);

module.exports = router;
