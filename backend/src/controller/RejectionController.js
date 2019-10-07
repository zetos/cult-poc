const Booking = require('../models/Booking');

const store = async (req, res) => {
  const { booking_id } = req.params;
  try {
    const booking = await Booking.findById(booking_id).populate('spot');

    booking.approved = false;
    await booking.save();

    return res.json(booking);
  } catch (err) {
    console.error('RejectionController store error:', err);
  }
};

module.exports = { store };
