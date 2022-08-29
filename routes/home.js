const express = require("express");
const { db } = require("../modal/mongoConnect");

const router = express.Router();
let collection =  db.collection('todo');


router.get("/", async (req, res) => {
  const data = await collection.find({}).limit(10).toArray();
  res.send(data );
});

module.exports = router;