const Booking = require('../models/Booking');
const User = require('../models/User');

const store = async (req, res) => {
  try {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const userCheck = await User.findById(user_id);
    if (!userCheck) {
      return res.status(400).json({ error: 'User does not exists.' });
    }

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking
      .populate('spot')
      .populate('user')
      .execPopulate();

    return res.json(booking);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  store
};
