const express = require('express');
const router = express.Router();
const fs = require("fs");
const path = require('path');
const lang = require('../middleware/lang');

router.get('/', lang, function(req, res) {

  res.render('index', {locals: res.locals});
  
});

module.exports = router;
