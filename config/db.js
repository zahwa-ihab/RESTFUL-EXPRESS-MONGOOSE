const mongoose = require("mongoose");
///load env file
require("dotenv").config();
const mongoDB_URL = process.env.MONGODB_URL;

try {
  console.log("connecting to database");
  mongoose.connect(mongoDB_URL);
  console.log("SUCCESS: connection to db");
} catch (e) {
  console.log(e.message);
}
