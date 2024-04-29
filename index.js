const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const users = require('./src/routes/user-route');
const userData = require('./src/routes/user');

app.set('secretKey', 'beTest');

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/users', users);
app.use('/user', validateUser, userData);


function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
      if (err) {
        res.json({status:"error", message: err.message, data:null});
      }else{
        // add user id to request
        req.body.userId = decoded.id;
        next();
      }
    });
    
  }

app.listen(3000, () => {
    console.log('Server started on port ' + 3000);
});