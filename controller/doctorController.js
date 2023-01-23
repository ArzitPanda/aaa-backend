const {getConnection} = require('../middleware/dbconfig.js');



const db = getConnection();

const getDoctors = (req, res) => {
    db.query(`select * from doctor`, (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}
var list =[]

const createDoctor = (req, res) => {
    
        const
        {
            name,
            specialist,
            medicalid,
            graduation,
        } =req.body;

        db.query(`insert into doctor (name,specialist,medicalid,graduation) values ('${name}','${specialist}','${medicalid}','${graduation}')`, (err, result) => {   
            if(err){
                throw err;
            }
            res.status(200).json(result);
        });
    
        }


const getDoctorById=(req,res)=>{
    const {id}=req.params;
    db.query(`select * from doctor where id='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

const getDoctorBySpecialistId=(req,res)=>{
    const {id}=req.params;
    db.query(`select * from doctor where specialist='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

const getDoctorByHospitalId=(req,res)=>{
    const {id}=req.params;
    db.query(`select * from doctor where medicalid='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

const deleteDoctor=(req,res)=>{
    const {id}=req.params;
    db.query(`delete from doctor where id='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

const modifyAvailablity=(req,res)=>{
    const {id,date,shift}= req.body;
    db.query(`insert into doctor_available (date,shift,doctor_available,doc_id) values('${date}', '${shift}', 0,'${id}')`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}


const getBookingsById =(req,res)=>{

        const {Did,shift}=req.body;

      

    db.query(`SELECT count(*) as num,date from  appointment where Did='${Did}' and shift='${shift}' group by date`,(err,result)=>{

                res.send(result)


    })
   
    


}

        








const createSlots=(req,res)=>{
    const {id,shift_1,shift_2}= req.body;
    db.query(`insert into shift (Did,first_shift,second_shift) values ('${id}','${shift_1}','${shift_2}')`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}

const getSlots=(req,res)=>{
    const {id}=req.params;
    db.query(`select * from shift where Did='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}


const updateFirstSlot=(req,res)=>{
    const {id,shift}= req.body;
    db.query(`update shift set first_shift='${shift}' where Did='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}

const updateSecondSlot=(req,res)=>{
    const {id,shift}= req.body;
    db.query(`update shift set second_shift='${shift}' where Did='${id}'`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}






module.exports = {
    getDoctors,
    createDoctor,
    getDoctorById,
    getDoctorBySpecialistId,
    getDoctorByHospitalId,
    deleteDoctor,
    modifyAvailablity,
    createSlots,
    updateFirstSlot,
    updateSecondSlot,
    getSlots,
    getBookingsById
    
}
