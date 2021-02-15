const path = require('path');
const fs = require('fs');
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


// User Route imports
const authRoute = require('./api/routes/auth.route');


// Admin route imports
const adminAuthRoute = require('./api/admin_routes/adminAuth.route');
const adminUserRoute = require('./api/admin_routes/adminUser.route');


mongoose.connect('mongodb+srv://gberuashvili92:Berobero12@autoparts.isppw.mongodb.net/Autoparts?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}, (error) => {
  if(!error) console.log('Connected to DB!');
  else console.log(error);
});

const app = express();

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// General purpose middlewares
dotenv.config();
app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// User Routes
app.use('/api/auth', authRoute);

// Admin Routes
app.use('/api/admin/auth', adminAuthRoute);
app.use('/api/admin/user', adminUserRoute);

// catch 404 api error and forward to error handler
app.use('/api/*', (req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Static files
module.exports = app;
