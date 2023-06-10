const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: String,
  email: {
    type: String,
    lowercase: true,
  },
});

module.exports = mongoose.model("User", userSchema);
