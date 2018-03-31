var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongooseConfig = require('./database/config');
var qiniu = require('./routes/qiniu')
var session = require('express-session')

var index = require('./routes/index');
var users = require('./routes/users');
var news = require('./routes/news');
var cases = require('./routes/cases');
var swiper = require('./routes/swiper')
var clients = require('./routes/clients');
var admin = require('./routes/admin');

var server = require('./routes/page/admin');
var client = require('./routes/page/client');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'xing',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.use('/server', server)
app.use('/', client)
app.use('/api/admin', admin)
app.use('/api', qiniu);
app.use('/api/users', users);
app.use('/api/news', news);
app.use('/api/cases', cases);
app.use('/api/swiper', swiper)
app.use('/api/users', users);
app.use('/api/clients' ,clients)

  
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
