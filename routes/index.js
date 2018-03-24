var express = require('express');
var router = express.Router();
var mongo = require('../db/mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RehabCoach' });
  mongo.findAllPatients('rehab_coach');
});

module.exports = router;
