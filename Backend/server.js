const dotenv = require("dotenv")
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const mongoConnect = mongoose.connection;
const app = express();
const port = 3008;

app.use(cors());

const client = mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true })
.then(console.log(`MongoDB connected`))
.catch(err=>console.log(err));

mongoose.connection.on('open', function (ref) {
  console.log('Connected to mongo server.');
});

app.get("/checkCollections", async function(req, res) {
  const db = mongoose.connection.useDb('KoalaTea').db;

  // Retrieve all collection names
  db.listCollections().toArray((err, collections) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Collections found:', collections.map(collection => collection.name));
      res.send(collections.map(collection => collection.name));
    }
  })
 });

 app.get("/getDrinks", async function(req, res) {
  mongoose.connection.useDb('KoalaTea').db.collection('Drink').find({}).toArray((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(Object.values(data));
      for(let i =0; i < Object.values(data).length; i++){
        console.log(Object.values(data)[i].name);
      }
    }  
   
  })

 });

 app.get("/getFlavors", async function(req, res) {
  mongoose.connection.useDb('KoalaTea').db.collection('Flavor').find({}).toArray((err, data) => {
    if (err) {
      console.error(err);
    } else {
      for(let i =0; i < Object.values(data).length; i++){
        console.log(Object.values(data)[i].name);
      }
    }  
   
  })

 });

app.get('/', (req, res) => {
console.log("hi");
});

app.get('/getData', (req, res) => {
  console.log("Boba Connection");
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
