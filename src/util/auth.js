import { sign } from 'jsonwebtoken';
import { createHmac } from 'crypto';
import { newError } from '../util/error.js';

export function hashPass(pass, secret) {

    if(!pass) throw newError(400, 'É necessário informar o password');
    if(!secret) throw newError(400, 'É necessário informar o secret');
	return createHmac('sha256', secret).update(pass).digest('base64');

}

export function createToken(payload, jwtSecret, options = {}) {

    if(!jwtSecret) throw newError(500, 'É necessário informar o jwtSecret');

    return sign(payload, jwtSecret);

}

