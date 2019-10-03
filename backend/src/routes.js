const express = require('express')

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({message: '3301'});
});

module.exports = routes;
