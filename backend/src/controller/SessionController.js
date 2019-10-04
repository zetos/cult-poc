const User = require('../models/User');

const store = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.create({ email });
    return res.json(user);
  } catch (err) {
    console.error('SessionController store error:', err);
    return res.status(500).send(err.errmsg);
  }
};

module.exports = {
  store
};
