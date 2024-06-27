const mongoose = require('mongoose');

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(err => console.log("MongoDB connection error:", err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/pizzas'); // Connect to the pizzas database
}

module.exports = mongoose;