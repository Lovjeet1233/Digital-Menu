const express = require('express');
const app = express();
const mongoose = require('./db');
const Pizza = require('./models/pizzaModel');
const pizzasRoute = require('./routes/pizzasRoute'); // Correctly require the pizzasRoute

app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Pizza App Backend!');
});

app.use("/api/pizzas", pizzasRoute); // Use pizzasRoute correctly

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
