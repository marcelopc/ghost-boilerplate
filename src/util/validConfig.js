const config = require('../../config/config.js');
const error = require('./error.js');

const env = process.env.NODE_ENV || 'development';

module.exports = ()=>{
    
    if(!(config.database[env].username &&
        config.database[env].password &&
        config.database[env].database &&
        config.database[env].host &&
        config.database[env].dialect &&
        config.database[env].pool)) throw error.newError(500, `É necessário preencher o config database [${env}]`);
    
    if(!(config.server[env].secret && 
        config.server[env].jwtSecret &&
        config.server[env].nome  &&
        config.server[env].url)) throw error.newError(500, `É necessário preencher o config server`);

};

