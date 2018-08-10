import { newError } from './error.js';

export const config = (env, config)=> {

    if(!env) throw newError(500, `É necessário informar o env`);
    if(!config) throw newError(500, `É necessário informar o config`);
    if(!config.database[env]) throw newError(500, `É necessário informar o config database`);
    if(!config.server[env]) throw newError(500, `É necessário informar o config server`);
        
    database(config.database[env]);
    server(config.server[env]);

};

export const database = (database)=>{

    if(!(database.username &&
        database.password &&
        database.database &&
        database.host &&
        database.dialect &&
        database.pool)) throw newError(500, `É necessário preencher o config database`);

};

export const server = (server)=>{

    if(!(server.secret && 
        server.jwtSecret &&
        server.nome  &&
        server.url)) throw newError(500, `É necessário preencher o config server`);

};