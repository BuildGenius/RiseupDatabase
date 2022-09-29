var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cron = require('node-cron');
// var session = require('cookie-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ConnectionRouter = require('./routes/connection');
var tempserverRouter = require('./routes/tempserver');
var SSRouter = require('./routes/SS20220901');
var D365_snapshot = require('./routes/D365_snapshot');
var FunctionRouter = require('./routes/functions');
var apiRouter = require('./routes/api');

var session_options = {
  secret: '17729285b1719d15e3a323c5e1c0d907',
  resave: false,
  saveUninitialized: false
}

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', 1)
app.use(session(session_options));
app.use((req, res, next) => {
  res.locals.session = req.session
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/connection', ConnectionRouter);
app.use('/functions', FunctionRouter);
app.use('/connection/tempserver', tempserverRouter);
app.use('/connection/SS20220901', SSRouter);
app.use('/connection/D365_snapshot', D365_snapshot);
app.use('/api', apiRouter);

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
  res.render('error');
});

module.exports = app;
