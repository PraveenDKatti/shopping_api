const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import the items routes
const itemsRoutes = require('./routes/items');

// Use the items routes
app.use('/api/items', itemsRoutes);

// Define root route BEFORE starting the server
app.get('/', (req, res) => {
    res.send("Welcome to the Shopping API! Access items at /api/items");
});

// Start the server (last line)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
