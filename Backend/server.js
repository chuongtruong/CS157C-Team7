const dotenv = require("dotenv")
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');



const mongoConnect = mongoose.connection;
const app = express();
const port = 3008;


const koala = mongoose.connect(process.env.MONGO_URL, {
    auth: {
        username: process.env.MONGO_USER,
        password: process.env.MONGO_PASSWORD
    },
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('MongoDB database Connected...')}).catch(err => console.log(err.reason));

//const schema = new mongoose.Schema({ _id: 'ObjectId', name: 'string', description: 'string', price: 'Decimal128', toppings: 'Array', flavors: 'Array', sizes: 'Array' });
/*mongoConnect.on('open', function (ref) {
  console.log('Connected to mongo server.');
  //trying to get collection names
  mongoConnect.db.listCollections().toArray(function (err, names) {
      console.log(names + "NONE"); // [{ name: 'dbname.myCollection' }]
  });
})
*/
let listOfCollections = Object.keys(mongoConnect.collections);
console.log(listOfCollections + " is supposed to be list of collections");

const schema = new mongoose.Schema({ _id: 'ObjectId', name: 'string'}, {collection: 'Flavor'});

const flavor = mongoose.model('flavor', schema);

console.log(koala);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
console.log("hi");
console.log(koala);
});

app.get('/getData', (req, res) => {
  console.log("Boba Connection");
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
