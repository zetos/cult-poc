const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpotSchema = new Schema(
  {
    thumbnail: String,
    company: {
      type: String,
      required: true,
      minlength: 3
    },
    price: Number,
    deities: [String],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Spot', SpotSchema);
