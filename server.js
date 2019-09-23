// require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const models = require('./models');
const PORT = process.env.PORT || 4500;

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

//Routes
require('./routes/html-routes')(app, path);
require('./routes/api-routes')(app, path);


models.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log('App is listening on port ' + PORT);
  })
});