const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const routes = require('./routes');

const app = express();

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(err => console.error('Mongoose connect error:', err));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully..');
});

app.use(express.json());
app.use(routes);

app.listen(3001);
