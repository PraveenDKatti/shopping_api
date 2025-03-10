const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const filePath = path.join(__dirname, '../data/items.txt'); // Path to items.txt

// Function to read and parse items.txt
const getItems = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8'); // Read the file
        return JSON.parse(data); // Convert string to JSON
    } catch (error) {
        console.error('Error reading items.txt:', error);
        return []; // Return empty array on error
    }
};

// Route to get all items
router.get('/', (req, res) => {
    res.json(getItems());
});

// Route to get an item by ID
router.get('/:id', (req, res) => {
    const items = getItems();
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
});

module.exports = router;
