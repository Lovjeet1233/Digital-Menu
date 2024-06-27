// insertData.js
const mongoose = require('./db');
const Pizza = require('./models/pizzaModel');
const pizzas = require('./data');

async function main() {
  try {
    await Pizza.insertMany(pizzas);
    console.log("Data inserted successfully");
  } catch (err) {
    console.log("Error inserting data:", err);
  } finally {
    mongoose.connection.close();
  }
}

main().catch(err => console.log("MongoDB connection error:", err));