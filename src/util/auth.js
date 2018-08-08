const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const error = require('../util/error.js');

exports.hashPass = function(pass, secret) {

    if(!pass) throw error.newError(400, 'É necessário informar o password');
    if(!secret) throw error.newError(400, 'É necessário informar o secret');
	return crypto.createHmac('sha256', secret).update(pass).digest('base64');

};

exports.createToken = function(payload, jwtSecret, options = {}) {

    if(!jwtSecret) throw error.newError(500, 'É necessário informar o jwtSecret');

    return jwt.sign(payload, jwtSecret);

};

