const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, unique: true, sparse: true },  // 将 required 设置为 false，并设置 sparse 以允许 null 或空字符串
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model('Book', bookSchema);
