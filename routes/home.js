const express = require("express");
const { ObjectId } = require("mongodb");
const { db } = require("../modal/mongoConnect");
const { validate } = require("../modal/todo");

const router = express.Router();
let collection =  db.collection("todo");
let user =  db.collection("user");

router.get("/todo", async (req, res) => {
  const data = await collection.find({}).toArray();
  res.send(data );
});

router.post("/todo", async (req, res) => { 
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  
  let genre = await collection.insertOne({ data: req.body.data, id : req.body.id });
  res.send(genre);
});

router.delete("/todo/:id", async (req, res) => {
 
  const data = await collection.deleteOne({ _id : ObjectId(req.params.id) });
  res.send(data);
});

router.get("/alluser", async (req, res) => { 
  const data = await user.find({}).toArray();
  res.send(data );
});

router.post("/signup", async (req, res) => { 
  // const { error } = validate(req.body);
  // if (error) return res.status(400).send(error.details[0].message);
  
  let genre = await user.insertOne({ username : req.body.username, password : req.body.password, phone :   req.body.phonenumber});
  
  
  res.send(genre);
});



module.exports = router;