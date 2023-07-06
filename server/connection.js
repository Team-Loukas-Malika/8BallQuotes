const mongoose = require("mongoose");
require ("dotenv").config();
const uri = process.env.MONGODB_URI;


const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

async function db() {
  try {
    await mongoose.connect(uri, connectionParams);
    console.log("Connected to database.");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
}

module.exports = db;