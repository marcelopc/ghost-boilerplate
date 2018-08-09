const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');
const config = require('../../config/config.js');
const lang = require('../middleware/lang');
const cors = require('cors');
const apicache = require('apicache');
const fetch = require('node-fetch');
const debug = require('../util/debug.js');


const auth = require('../util/auth.js');


router.get('/', lang, function(req, res) {

  res.render('index', {locals: res.locals});
  
});

router.head('/api', function(req, res) {
  res.sendStatus(200)
});


router.get('/api', function(req, res) {
  res.send({
    message: 'Work'
  });  
});



module.exports = router;
