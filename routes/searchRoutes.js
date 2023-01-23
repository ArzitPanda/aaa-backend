const express = require('express');
const {

popularDoctors,
searchDoctor,
searchMedical,
searchLocation


} = require('../controller/searchController.js');


const searchRouter = express.Router();




searchRouter.get('/popularDoctors',popularDoctors);
searchRouter.get('/searchDoctor/:name',searchDoctor);
searchRouter.get('/searchMedical/:name',searchMedical);
searchRouter.get('/searchLocation/:name',searchLocation);

module.exports = {searchRouter};