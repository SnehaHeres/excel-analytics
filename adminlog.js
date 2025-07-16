// models/AdminLog.js
const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema({
  action: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  timestamp: { type: Date, default: Date.now },
  details: { type: mongoose.Schema.Types.Mixed },
});

module.exports = mongoose.model('AdminLog', adminLogSchema);
