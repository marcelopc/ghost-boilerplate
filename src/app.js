const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const compression = require('compression');
const helmet = require('helmet');

const index = require('./routes/index');
const validConfig = require('./util/validConfig.js');

const app = express();    
  
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(helmet());
app.use(favicon(path.join(__dirname, 'public', '../../public/images/favicon/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(compression());

 
app.use('/', index);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
app.use(function(err, req, res, next) {
  
  if(!err.status){
  	let err = new Error('Internal Server Error');
  	err.status = 501;
  }
   
  res.status(err.status);

  res.render('error', {locals: {error: err}});
});

module.exports = app;


