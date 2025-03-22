const mongoose = require('mongoose');
const shortid = require('shortid');

const UrlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
    default: shortid.generate, // Automatically generate a short code
    unique: true, // Ensure short codes are unique
  },
  accessCount: {
    type: Number,
    default: 0,
   },
 },
  {
    timestamps: true
  }
);


module.exports = mongoose.model('Url', UrlSchema);