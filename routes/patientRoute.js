const express = require('express');

const { getPatients, createPatient, getPatientById, getPatientByUid, getPatientsByDoctorId } = require('../controller/patientController.js');

const { getConnection } = require('../middleware/dbconfig.js');



const patientRoutes = express.Router();




patientRoutes.get('/getpatient', getPatients);

patientRoutes.post('/createpatient', createPatient);

patientRoutes.get('/getpatient/:id', getPatientById);
patientRoutes.get('/getpatientbyUserId/:id',getPatientByUid);

patientRoutes.get('/getpatientsbydoctorid/:id', getPatientsByDoctorId);


module.exports ={ patientRoutes};