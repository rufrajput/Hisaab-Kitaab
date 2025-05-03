const InventoryItem = require('../models/inventory.model');

// Controller method to get all inventory items
const getAllInventoryItems = async (req, res) => {
  try {
    const items = await InventoryItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller method to add a new inventory item
const addInventoryItem = async (req, res) => {
  try {
    const item = new InventoryItem(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller method to add multiple inventory items
const addMultipleInventoryItems = async (req, res) => {
  try {
    const items = await InventoryItem.insertMany(req.body);
    res.status(201).json(items);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller method to update an inventory item by ID
const updateInventoryItem = async (req, res) => {
  try {
    const updatedItem = await InventoryItem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.json(updatedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller method to delete an inventory item by ID
const deleteInventoryItem = async (req, res) => {
  try {
    const deletedItem = await InventoryItem.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllInventoryItems,
  addInventoryItem,
  addMultipleInventoryItems,
  updateInventoryItem,
  deleteInventoryItem,
};
