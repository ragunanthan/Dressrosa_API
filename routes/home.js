const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("application mail " + config.get("mail.host"));
});

module.exports = router;