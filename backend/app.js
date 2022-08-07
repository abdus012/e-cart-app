var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

// var cartRouter = require('./routes/cartRoute');
var productRouter = require('./routes/productRoute');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, '/public/uploads')));

const MongoClient = require("mongoose");

const DB = process.env.MONGODB_URL;

MongoClient.connect(DB)
  .then((result) => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err, "err");
  });

app.use(cors());

// app.use('/api', cartRouter);
app.use('/api',productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');

  res.status(404).json({
    error:"Page Not Found"
  })

  res.status(500).json({
    error:"Internal Server Error"
  })

});

module.exports = app;