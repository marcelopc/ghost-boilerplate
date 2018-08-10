import SequelizeAuto from 'sequelize-auto';
import { database } from '../../config/config.js';

const env = process.env.NODE_ENV;

const auto = new SequelizeAuto(database[env].database, database[env].username, database[env].password, {
  camelCaseForFileName: true,
  dialect: database[env].dialect,
  directory: './src/models/'
});

auto.run(function (err) {
  if (err) {
  	throw err;
  }

  console.log('---------------- DB TO MODEL ----------------');
  console.log(`BASE: ${database[env].database}`);
  console.log(`ENV: ${env}`);
  console.log('------------------ SUCESS ------------------');

});

