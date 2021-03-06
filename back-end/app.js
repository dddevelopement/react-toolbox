// app.js

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

// Mongoose connection with mongodb
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://DDDMongo:b4HN88744Cm083Re@dddmongocluster-shard-00-00-qn7eb.mongodb.net:27017,dddmongocluster-shard-00-01-qn7eb.mongodb.net:27017,dddmongocluster-shard-00-02-qn7eb.mongodb.net:27017/test?ssl=true&replicaSet=DDDMongoCluster-shard-0&authSource=admin')
    .then(() => { // if all is ok we will be here
      console.log('Start');
    })
    .catch(err => { // if error we will be here
        console.error('App starting error:', err.stack);
        process.exit(1);
    });
 

// Use middlewares to set view engine and post json data to the server
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
