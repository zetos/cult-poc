const Spot = require('../models/Spot');
const User = require('../models/User');

const index = async (req, res) => {
  // Filter by deity.
  const { deity } = req.query;

  const spots = await Spot.find({ deities: deity });

  return res.json(spots);
};

const store = async (req, res) => {
  try {
    const { filename } = req.file;
    const { cult, deities, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ error: 'User does not exists.' });
    }

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      cult,
      deities: deities.split(',').map(deity => deity.trim()),
      price
    });

    return res.json(spot);
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  store,
  index
};
