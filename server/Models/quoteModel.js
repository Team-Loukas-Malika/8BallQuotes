const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  content: { type: String, require:true},
  author: String,
  tags: [String],
  urlImage: String,
  createdAt: { type: Date, default: Date.now } 
})

const QuoteModel = mongoose.model("Quote", QuoteSchema);

module.exports = QuoteModel;