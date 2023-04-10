const dotenv = require("dotenv")
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

mongoose.connect(process.env.MONGO_URL, {
    auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    },
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
