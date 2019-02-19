const express = require('express');
const router = express.Router()

/* Get home page*/
router.get("/", function(req, res, next) {
  res.render("index")
  // res.send("<h1>Hello Bro!</h1>");
});

// A test url
router.get("/testrun", function(req, res, next) {
  const responseObject = {status: "ConnectUs is live"};
  res.send(responseObject);
});

router.get("/chat", function(req, res, next) {
   
});
// Used for exporting the router back to app.js
module.exports = router;
