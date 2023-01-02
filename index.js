const express =require('express');
const { getConnection } = require('./middleware/dbconfig.js');


const authRoutes = require('./routes/authRoutes.js');
const { patientRoutes } = require('./routes/patientRoute.js');
const { doctorRouter } = require('./routes/doctorRoute.js');
const { medicalRouter } = require('./routes/medicalRoute.js');
const { appoRouter } = require('./routes/appointmentRoute.js');



const db= getConnection();



const app = express();

app.use(express.json())
app.use('/api/auth', authRoutes);
app.use("/api/patient",patientRoutes)
app.use("/api/doctor",doctorRouter)
app.use("/api/medical",medicalRouter);
app.use("/api/application",appoRouter)









app.listen(3000, () => console.log('Listening to your heart '));
