const express = require('express')

const {

    createMedical,
    getMedicalById,
    getNearbyMedicals,
    updateMedical,
    getMedicals,
    medicalByName
} =require("../controller/medicalController")





const medicalRouter = express.Router();


medicalRouter.get('/',getMedicals);
medicalRouter.get('/:id',getMedicalById);
medicalRouter.post('/',createMedical);
medicalRouter.post("/nearby",getNearbyMedicals);

medicalRouter.get("name/:name",medicalByName);
medicalRouter.put('/:id',updateMedical);


module.exports ={medicalRouter}