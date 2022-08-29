const express = require("express");
const { db } = require("../modal/mongoConnect");

const router = express.Router();
let collection =  db.collection('todo');


router.get("/todo", async (req, res) => {
  const data = await collection.find({}).limit(10).toArray();
  res.send(data );
});

router.post("/todo", async (req, res) => {
  res.send(req.body );
});

module.exports = router;