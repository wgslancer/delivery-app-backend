const express = require('express');
const cors = require('cors');
const app = express();
// setting env

const PORT = process.env.NODE_ENV || 3001;

// setting middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// setting routes
app.use('/api', require('./routes/index'));

module.exports = {
  server: app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
  }),
};
