const User = require('../models/User');

const store = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    return user ? res.json(user) : res.json(await User.create({ email }));
  } catch (err) {
    console.error('SessionController store error:', err);
    return res.status(500).send(err.errmsg);
  }
};

module.exports = {
  store
};
