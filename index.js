const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const mogoose = require('mongoose');

const mpesaRoutes = require('./routes/mpesa');

mogoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected successfully to the database');
  })
  .catch((err) => console.log(err));

app.use('/api', mpesaRoutes);

app.listen(port, () => {
  console.log(`The application is running on port ${port}`);
});
