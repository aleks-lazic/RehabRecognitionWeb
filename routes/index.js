var express = require('express');
var router = express.Router();
var mongo = require('../db/mongodb');
var patient = require('../model/patient');

/* GET home page. */
router.get('/', function(req, res, next) {
  //get all patients from the db
  mongo.findAllPatients('rehab_coach').then((result) => {
    var patients = [];
    for(var i = 0 ; i<result.length ; i++){
      //add every patient to the array
      patients.push(new patient(result[i]._id, result[i].moves));
    }
    var moves = [];
    var move = {
      from: "",
      to: "",
      timeSec: 0.0,
    }
    for(var i = 0 ; i<patients.length ; i++){
      for(var j = 0 ; j<patients[i].moves.length -1 ; j++){
        moves.push({repetition: patients[i].moves[j + 1].repetition, from: patients[i].moves[j].place, to: patients[i].moves[j + 1].place, timeSec: (patients[i].moves[j + 1].time - patients[i].moves[j].time) / 1000});
      }
      console.log(moves);
      patients[i].moves = moves;
      moves = [];
    } 
    res.render('index', { title: 'RehabCoach', array: patients });
  });
});

module.exports = router;
