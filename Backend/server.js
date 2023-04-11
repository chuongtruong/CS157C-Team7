const dotenv = require("dotenv")
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');



const db = mongoose.connection;
const app = express();
const port = 3008;


mongoose.connect(process.env.MONGO_URL, {
    auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    },
    useNewUrlParser: true,
    useUnifiedTopology: true
}), () => {
  console.log("HELO");
};


const drink = mongoose.model

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
console.log("hi");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
