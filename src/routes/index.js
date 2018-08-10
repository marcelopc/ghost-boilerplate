import { Router } from 'express';

import fs from "fs";
import path from 'path';
import cors from 'cors';
import apicache from 'apicache';
import fetch from 'node-fetch';

import config from '../../config/config.js';
import debug from '../util/debug.js';
import auth from '../util/auth.js';
import lang from '../rest/middleware/lang.js';

const router = Router();

router.get('/', lang, function(req, res) {

  res.render('index', {locals: res.locals});
  
});

router.head('/api', function(req, res) {
  res.sendStatus(200);
});

router.get('/graph', function(req, res) {
  res.send({
    message: 'Work'
  });  
});



export default router;
