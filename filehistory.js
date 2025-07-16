// models/FileHistory.js
const mongoose = require('mongoose');

const fileHistorySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filename: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  selectedAxes: {
    x: { type: String },
    y: { type: String }
  },
  chartType: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('FileHistory', fileHistorySchema);
