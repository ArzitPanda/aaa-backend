const {getConnection}  = require('../middleware/dbconfig.js');
const { Patientquery } = require('../query/patient.js');



const db = getConnection();


const getPatients = (req, res) => {
    db.query(Patientquery.getusers, (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}

const createPatient = (req, res) => {

    const {name,age,disease,gender,isuser,uid} = req.body;

        db.query(Patientquery.creteuser({
                name,
                age,
                disease,
                gender,
                isuser,
                uid


        }), (err, result) => {   
            if(err){
                throw err;
            }
            res.status(200).json(result);
        });



        }


const getPatientById=(req,res)=>{
    const {id}=req.params;
    db.query(Patientquery.getuserbyid(id),(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result[0]);
    });
}

const getPatientByUid=(req,res)=>{
    const {uid}=req.params;
    db.query(Patientquery.getuserbyuid(uid),(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

const getPatientsByDoctorId =(req,res)=>{
    const {id}=req.params;
    db.query(Patientquery.getuserbydoctorid(id),(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}


module.exports = {getPatients,createPatient,getPatientById,getPatientByUid,getPatientsByDoctorId};
