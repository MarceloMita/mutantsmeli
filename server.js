const express = require('express');
const app = express(); 
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const Mutant = require('./api/models/mutant');
const bodyParser = require('body-parser');
const routes = require('./api/routes/mutantsRoutes'); //importing route

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Mutantdb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //register the route

/* istanbul ignore if */
if (!module.parent) {
  const server = app.listen(port, function () {
    console.log('Listening at http://localhost:%s', port);
  });
}

module.exports = app;