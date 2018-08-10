import express from 'express';
import es6Renderer from 'express-es6-template-engine';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';

import index from './routes/index';

const app = express();    
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, '../public')));
app.use(compression());
 
app.use('/', index);

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

export default app;


