import SequelizeAuto from 'sequelize-auto';
import { database } from '../../config/config.js';

const env = process.env.NODE_ENV;

const auto = new SequelizeAuto(database[env].database, database[env].username, database[env].password, {
  camelCaseForFileName: true
});

auto.run(function (err) {
  if (err) {
  	throw err;
  }

  console.log(auto.tables);
  console.log(auto.foreignKeys);
});

