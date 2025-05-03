const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller');

// Get all inventory items
router.get('/', inventoryController.getAllInventoryItems);

// Add one inventory item
router.post('/', inventoryController.addInventoryItem);

// Add multiple inventory items
router.post('/bulk', inventoryController.addMultipleInventoryItems);

// Update inventory item by ID
router.put('/:id', inventoryController.updateInventoryItem);

// Delete inventory item by ID
router.delete('/:id', inventoryController.deleteInventoryItem);

module.exports = router;
