const express =require('express');
const { getConnection } = require('./middleware/dbconfig.js');
const cors = require('cors');
const  fileUpload = require('express-fileupload');


const authRoutes = require('./routes/authRoutes.js');
const { patientRoutes } = require('./routes/patientRoute.js');
const { doctorRouter } = require('./routes/doctorRoute.js');
const { medicalRouter } = require('./routes/medicalRoute.js');
const { appoRouter } = require('./routes/appointmentRoute.js');
const { reviewRouter } = require('./routes/reviewRoute.js');
const { searchRouter } = require('./routes/searchRoutes.js');




const db= getConnection();



const app = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true} ))
app.use(fileUpload())
app.use('/api/auth', authRoutes);
app.use("/api/patient",patientRoutes)
app.use("/api/doctor",doctorRouter)
app.use("/api/medical",medicalRouter);
app.use("/api/application",appoRouter)
app.use("/api/review",reviewRouter)
app.use("/api/search",searchRouter)








app.listen(3001, () => console.log('Listening to your heart '));
