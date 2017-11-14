var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
  res.send('Inside Todo routes');
});

module.exports = router;
