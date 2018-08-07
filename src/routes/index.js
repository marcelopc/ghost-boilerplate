const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');
const config = require('../../config/config.js');
const lang = require('../middleware/lang');
const cors = require('cors');


router.get('/', lang, function(req, res) {

  res.render('index', {locals: res.locals});
  
});


router.get('/api', function(req, res) {
  res.send({
    message: 'API Work'
  });
  
});

module.exports = router;
