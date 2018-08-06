const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js').database[env];
const associate = require('./associate')


let db = null;

if (!db) {

    db = {};

// //     const operatorsAliases = {
// //         $in: Sequelize.Op.in
// //     };

// //     config = Object.assign({operatorsAliases}, config);

    const sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: config.operatorsAliases,
        logging: config.logging,
        pool: config.pool
    });

    fs.readdirSync(__dirname)
        .filter((file) => {
            const fileSlice = file.slice(-3);
            return (file.indexOf('.') !== 0) && (file !== basename) && ((fileSlice === '.js') || (fileSlice === '.js'));
        })
        .forEach((file) => {
            const model = sequelize.import(path.join(__dirname, file));
            // db[model['name']] = model;
            db[file.split('.')[0]] = model;
        });

    db['sequelize'] = sequelize;


 
}

module.exports = db
