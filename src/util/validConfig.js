const error = require('./error.js');

module.exports = {

    config: function(env, config){

        if(!env) throw error.newError(500, `É necessário informar o env`);
        if(!config) throw error.newError(500, `É necessário informar o config`);
        if(!config.database[env]) throw error.newError(500, `É necessário informar o config database`);
        if(!config.server[env]) throw error.newError(500, `É necessário informar o config server`);
            

        this.database(config.database[env])
        this.server(config.server[env])

    },

    database: function(database){

        if(!(database.username &&
            database.password &&
            database.database &&
            database.host &&
            database.dialect &&
            database.pool)) throw error.newError(500, `É necessário preencher o config database`);

    },

    server: function(server){

        if(!(server.secret && 
            server.jwtSecret &&
            server.nome  &&
            server.url)) throw error.newError(500, `É necessário preencher o config server`);

    }


}



