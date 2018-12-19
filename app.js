const express = require('express');
const app = express();

app.set('view engine', 'pug');

const index = require('./routes/home');

app.use('/', index);

// Server listen on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
