const express = require('express')

const {

getDoctors,
getDoctorById,
getDoctorBySpecialistId,
getDoctorByHospitalId,
createDoctor,
deleteDoctor,
modifyAvailablity,
createSlots,
updateFirstSlot,
updateSecondSlot,
getSlots,
getBookingsById

} =require("../controller/doctorController.js")

const doctorRouter = express.Router();



doctorRouter.get('/', getDoctors);
doctorRouter.get('/:id', getDoctorById);

doctorRouter.get('/specialist/:id', getDoctorBySpecialistId);
doctorRouter.get('/hospital/:id', getDoctorByHospitalId);
doctorRouter.post('/', createDoctor);
doctorRouter.post('/availablity', modifyAvailablity);
doctorRouter.post('/createSlot',createSlots);
doctorRouter.get('/getSlot/:id',getSlots);
doctorRouter.put('/createSlot/firstslot',updateFirstSlot);
doctorRouter.put('/createSlot/secondslot',updateSecondSlot);
doctorRouter.post("/getBookings",getBookingsById)

doctorRouter.delete('/:id', deleteDoctor);
module.exports = {doctorRouter};