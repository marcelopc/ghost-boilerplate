const SequelizeAuto = require('sequelize-auto');
const config = require('./config/config.js');

const auto = new SequelizeAuto(config.database.development.database, config.database.development.username, config.database.development.password, {
  camelCaseForFileName: true
});

auto.run(function (err) {
  if (err) {
  	throw err;
  };

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
