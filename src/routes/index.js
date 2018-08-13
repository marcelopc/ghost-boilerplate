import { Router } from 'express';
import expressGraphQl from 'express-graphql';
import { buildSchema } from 'graphql';


import fs from "fs";
import path from 'path';
import cors from 'cors';
import apicache from 'apicache';
import fetch from 'node-fetch';

import config from '../../config/config.js';
import debug from '../util/debug.js';
import auth from '../util/auth.js';
import lang from '../rest/middleware/lang.js';

import schema from '../graphql/schema.js';

const env = process.env.NODE_ENV;


const router = Router();

router.get('/', lang, function(req, res) {

  res.render('index', {locals: res.locals});
  
});

router.head('/api', function(req, res) {
  res.sendStatus(200);
});

// router.use('/graphql', expressGraphQl({
//     schema: schema,
//     graphiql: env === 'development',
//     context: req['context']
// }))



export default router;
