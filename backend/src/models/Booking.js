const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema(
  {
    date: {
      type: String,
      required: true
    },
    approved: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Spot',
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Booking', BookingSchema);
