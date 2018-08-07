'use strict';

const jwt = require('jsonwebtoken');
const config = require('../../config/config.js');

exports.token = function(req,res,next) {

	jwt.verify(req.headers.token, config.server.jwtSecret, function(err, decoded) {

		if(err){
			res.sendStatus(401)
			return
		}

		next();

	});

}

