var express = require('express');
var router = express.Router();
var mongo = require('../db/mongodb');
var patient = require('../model/patient');

var finalPatients = [];

/* GET all users */
router.get('/', function(req, res, next) {
  //get all patients from the db
  mongo.findAllPatients('rehab_coach').then((result) => {
    var patients = [];
    for(var i = 0 ; i<result.length ; i++){
      //add every patient to the array
      patients.push(new patient(result[i]._id, result[i].moves));
    }
    var moves = [];
    for(var i = 0 ; i<patients.length ; i++){
      for(var j = 0 ; j<patients[i].moves.length -1 ; j++){
        moves.push({repetition: patients[i].moves[j].repetition, from: patients[i].moves[j].place, to: patients[i].moves[j + 1].place, timeSec: (patients[i].moves[j + 1].time - patients[i].moves[j].time) / 1000});
      }
      patients[i].moves = moves;
      moves = [];
    } 
    finalPatients = patients;
    res.render('index', { title: 'RehabCoach', array: patients });
  });
});

router.get('/:id', function(req, res, next) {
  var currentPatient;
  for(var i = 0 ; i<finalPatients.length ; i++){
   if(req.params.id == finalPatients[i].id){
     currentPatient = finalPatients[i];
     res.render('graphUser', { patient: currentPatient });
   } 
  }
});

module.exports = router;
