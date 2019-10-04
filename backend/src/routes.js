const express = require('express');
const SessionController = require('./controller/SessionController');
const SpotController = require('./controller/SpotController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;
