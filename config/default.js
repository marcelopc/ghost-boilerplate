module.exports = {
    database: {
      development: {
        username: "",
        password: "",
        database: "database_dev",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
      },
      test: {
        username: "root",
        password: "",
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
      },
      production: {
        username: "root",
        password: "null",
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
        logging: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
      }
    }, 
    server: { 
      secret: '', 
      jwtSecret: '',
      url: '',
      nome: ''
    }
  } 



  
  
