'use strict';

import { verify } from 'jsonwebtoken';
import { server } from '../../config/config.js';

export function token(req,res,next) {

	verify(req.headers.token, server.jwtSecret, function(err, decoded) {

		if(err){
			res.sendStatus(401);
			return;
		}

		next();

	});

}

