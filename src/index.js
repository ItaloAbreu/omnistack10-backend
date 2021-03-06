const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const routes = require('./routes');

const app = express();

mongoose.connect(
  process.env.DB_CONNECT, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
