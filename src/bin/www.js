import app from '../app';
import debug from '../util/debug';
import * as validConfig from '../util/validConfig.js';
import {createServer} from 'http';

import config from '../../config/config.js';
var server;

debug('server', '-------------- INIT -------------------');
try{
  const env = process.env.NODE_ENV;
  validConfig.config(env, config);

  var port = normalizePort(config.server[env].port || '8080');
  app.set('port', port);

  server = createServer(app);

  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);

}catch(error){
  debug('error', error);
}


function onError(error) {

  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('server', 'Listening on ' + bind, 'server');
}

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }