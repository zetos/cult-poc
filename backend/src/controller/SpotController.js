const Spot = require('../models/Spot');
const User = require('../models/User');

const store = async (req, res) => {
  try {
    const { filename } = req.file;
    const { cult, deities, price } = req.body;
    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    const spot = await Spot.create({
      user: user_id,
      thumbnail: filename,
      cult,
      deities: deities.split(',').map(deitie => deitie.trim()),
      price
    });

    return user
      ? res.json(spot)
      : res.status(400).json({ error: 'User does not exists.' });
  } catch (err) {
    return res.status(400).send({ error: err.message });
  }
};

module.exports = {
  store
};
