const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CountrySchema = new Schema({
  code: String,
  name: String
  // createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("countrycodes", CountrySchema);