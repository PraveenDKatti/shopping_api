const express = require('express');
const cors = require('cors'); // Import cors package

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for your frontend
app.use(cors({
    origin: ['http://localhost:5173', 'https://teerexmark.netlify.app'], // Allow your frontend URL
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
}));

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
