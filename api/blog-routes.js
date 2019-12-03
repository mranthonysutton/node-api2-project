const express = require("express");
const router = express.Router();
const Posts = require("../data/db");

router.use(express.json());

router.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!" });
});

module.exports = router;
