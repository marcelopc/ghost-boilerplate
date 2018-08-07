const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const error = require('../util/error.js');
const config = require('../../config/config.js');

exports.hashPass = function(pass) {

    if(!config.server.jwtSecret) throw error.newError(500, 'É necessário informar a secret no config');

	return crypto.createHmac('sha256', config.server.secret).update(pass).digest('base64');

};

exports.createToken = function(payload, options) {

    if(!config.server.jwtSecret) throw error.newError(500, 'É necessário informar a jwtSecret no config');

    return jwt.sign(payload, config.server.jwtSecret, options);

};

