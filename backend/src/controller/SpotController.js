const Spot = require('../models/Spot');

const store = async (req, res) => {
  try {
    // const { email } = req.body;
    console.log(req.body);
    console.log(req.file);
    return res.json({ message: 'spot success' });
  } catch (err) {
    console.error('SessionController store error:', err);
    return res.status(500).send(err.errmsg);
  }
};

module.exports = {
  store
};
