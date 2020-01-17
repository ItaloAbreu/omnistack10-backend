const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

mongoose.connect(
  process.env.DB_CONNECT, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.post('/users', (req, res) => {
  console.log(req.body);
  return res.json({ message:  'Hello Omnistack'});
});

app.listen(3333);
