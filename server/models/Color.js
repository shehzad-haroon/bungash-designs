const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hex: { type: String, required: true },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Color', colorSchema);
