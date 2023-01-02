const express = require('express');

const {
    getApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    getDoctorApplications,
    getPatientApplications,
    checkAvailability
} =require("../controller/applicationController.js")


const appoRouter = express.Router();



appoRouter.get("/",getApplications);
appoRouter.get("/:id",getApplicationById)
appoRouter.post("/",createApplication);
appoRouter.put("/:id",updateApplication);
appoRouter.get("/doctor/:id",getDoctorApplications);
appoRouter.get("/patient/:id",getPatientApplications);
appoRouter.post("/check",checkAvailability);




module.exports = {appoRouter};

