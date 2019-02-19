const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');



app.use('/', index);

// Server listen on port 3000
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
