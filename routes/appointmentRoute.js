const express = require('express');

const {
    getApplications,
    getApplicationById,
    createApplication,
    updateApplication,
    getDoctorApplications,
    getPatientApplications,
    checkAvailability,
    checkSlots,
    getApplicationPdfById,
    getApplicationsByMID
} =require("../controller/applicationController.js")


const appoRouter = express.Router();



appoRouter.get("/",getApplications);
appoRouter.get("/:id",getApplicationById)
appoRouter.post("/",createApplication);
appoRouter.put("/:id",updateApplication);
appoRouter.get("/doctor/:id",getDoctorApplications);
appoRouter.get("/patient/:id",getPatientApplications);
appoRouter.post("/check",checkAvailability);
appoRouter.post("/checkslot",checkSlots);
appoRouter.get("/appointment/:id",getApplicationPdfById)
appoRouter.get("/medical/:id",getApplicationsByMID)




module.exports = {appoRouter};

