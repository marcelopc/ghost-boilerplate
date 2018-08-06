const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');

const app = express();
   
  
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(favicon(path.join(__dirname, 'public', '../../public/images/favicon/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  if(!err.status){
  	var err = new Error('Internal Server Error');
  	err.status = 501;
  }
 
  res.status(err.status || 500);

  res.render('error', {locals: {error: err}});
});

module.exports = app;


