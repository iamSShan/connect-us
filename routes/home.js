const express = require('express');
const router = express.Router()

/* Get home page*/
router.get("/", function(req, res, next) {
  res.render("index.pug")
  // res.send("<h1>Hello Bro!</h1>");
});

module.exports = router;
