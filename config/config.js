module.exports = {
  database: {
    development: {
      username: "root",
      password: "vader",
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
      password: "vader",
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
    development: {
      secret: 'vader', 
      jwtSecret: 'vader',
      url: 'http://127.0.0.1',
      port: '8000',
      nome: 'Ghost'
    },
    test: {
      secret: 'vader', 
      jwtSecret: 'vader',
      url: 'http://localhost',
      port: '3050',
      nome: 'Ghost'
    },
    production: {
      secret: 'vader', 
      jwtSecret: 'vader',
      url: 'http://localhost',
      port: '80',
      nome: 'Ghost'
    },
  }
} 
