import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";


const router = express.Router();

router.get("/checkCollections", async function(req, res) {
  const db = mongoose.connection.useDb('KoalaTea').db;

  // Retrieve all collection names
  db.listCollections().toArray((err, collections) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Collections found:', collections.map(collection => collection.name));
    }
  })
 });

// Get all drinks in the Drink collection
router.get("/getDrinks", async (req, res) => {
  let collection = await db.collection("Drink");
  let results = await collection.find({}).toArray((err, data) => {
    if (err) {
      console.error(err);
    } else {
      for (let i = 0; i < Object.values(data).length; i++) {
        console.log(Object.values(data)[i].name);
      }
    }
  });
  res.send(results).status(200);
});

// Get all flavors in the Flavors collection
router.get("/getFlavors", async function (req, res) {
  let collection = await db.collection("Flavor");
  let results = await collection.find({}).toArray((err, data) => {
    if (err) {
      console.error(err);
    } else {
      for (let i = 0; i < Object.values(data).length; i++) {
        console.log(Object.values(data)[i].name);
      }
    }
  });
  res.send(results).status(200);
});

// Get all sizes in the Sizes collection
router.get("/getSizes", async function (req, res) {
    let collection = await db.collection("Sizes");
    let results = await collection.find({}).toArray((err, data) => {
      if (err) {
        console.error(err);
      } else {
        for (let i = 0; i < Object.values(data).length; i++) {
          console.log(Object.values(data)[i].name);
        }
      }
    });
    res.send(results).status(200);
  });

// Get all topping in the Toppings collection
router.get("/getToppings", async function (req, res) {
    let collection = await db.collection("Toppings");
    let results = await collection.find({}).toArray((err, data) => {
      if (err) {
        console.error(err);
      } else {
        for (let i = 0; i < Object.values(data).length; i++) {
          console.log(Object.values(data)[i].name);
        }
      }
    });
    res.send(results).status(200);
  });

export default router;
