const {getConnection} = require('../middleware/dbconfig.js');
const { getApplicationPdf } = require('../middleware/getApplicationPdf.js');
const fs = require('fs');

const db= getConnection();



const getApplications=(req,res)=>{

        db.query(`select * from appointment inner join  patient on patient.idpatient = Pid inner join doctor  on doctor.id=Did`,(err,result)=>{

                    if(err)
                    {
                        throw err;
                    }
                    res.send(result);
                })



}

const getApplicationsByMID=(req,res)=>{
    const {id} = req.params
    db.query(`select * from appointment inner join  patient on patient.idpatient = Pid inner join doctor  on doctor.id=Did where doctor.medicalid= ${id}`,(err,result)=>{

                if(err)
                {
                    throw err;
                }
                res.send(result);
            })



}



const getApplicationById=(req,res)=>{
const {id} = req.params
    db.query(`select * from appointment inner join  patient on patient.idpatient = Pid inner join doctor  on doctor.id=Did where idappointment =${id}`,(err,result)=>{

                if(err)
                {
                    throw err;
                }

                res.send(result);

        

                // res.download("./application.pdf");
            }
    )
}



const getApplicationPdfById=(req,res)=>{
const {id} = req.params
    db.query(`select * from appointment inner join  patient on patient.idpatient = Pid inner join doctor  on doctor.id=Did where idappointment =${id}`,(err,result)=>{

                if(err)
                {
                    throw err;
                }


                    

                getApplicationPdf({data:result[0]});

                res.download(`pdf.pdf`);
                // fs.unlinkSync(`pdf.pdf`);

                // res.download("./application.pdf");
            }
    )
}



const checkAvailability=(req,res)=>{
    const {date,shift,Did} = req.body;
   db.query(`select doctor_available as available from doctor_available where date='${date}'  and Did='${Did}'`,(err,result)=>{
        if(err)
        {
            throw err;
        }
        res.status(200).json(result);
   })

}



const checkSlots=(req,res)=>{
    const {date,shift,Did} = req.body;
    db.query(`select count(*) as count from appointment where date='${date}' and shift='${shift}' and Did='${Did}'`,(err,result)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            if(result[0].count>=50)
            {
                res.status(400).json({message:"Doctor is busy on this date and shift",code:600,count:0});
            }
            else
            {
                res.status(200).json({message:"Doctor is available on this date and shift",code:200,count:50-result[0].count});
            }

    }}
    )
}




const createApplication=(req,res)=>{

    const {status,Did,Pid,date,shift} = req.body;
        
       



        db.query(`select count(*) as count from appointment where date='${date}' and shift='${shift}' and Did='${Did}'`,(err,result)=>{
            if(err)
            {
                throw err;
            }
           else
           {
            if(result[0].count>=50)
            {
                 res.status(400).json({message:"Doctor is busy on this date and shift",code:600});
            }
            else
            {
             db.query(`insert into appointment (status,Did,Pid,date,shift) values ('${status}','${Did}','${Pid}','${date}','${shift}')`,(err,result)=>{
                  if(err)
                  {
                        throw err;
                  }
                  res.status(200).json(result);
             })
            }
           }






        })


}



const updateApplication=(req,res)=>{
    const {id} = req.params;
    const {status} = req.body;
    db.query(`update appointment set status='${status}' where idappointment=${id}`,(err,result)=>{
        if(err)
        {
            throw err;
        }
        res.status(200).json(result);
    }
    )
}

const  getPatientApplications=(req,res)=>{
    const {id} = req.params
        db.query(`select * from appointment  inner join doctor  on doctor.id=Did where Pid =${id}`,(err,result)=>{
    
                    if(err)
                    {
                        throw err;
                    }
                    res.send(result);
                }
        )
    }

    const getDoctorApplications=(req,res)=>{
        const {id} = req.params
            db.query(`select * from appointment  inner join patient on patient.idpatient = Pid where Did =${id}`,(err,result)=>{
        
                        if(err)
                        {
                            throw err;
                        }
                        res.send(result);
                    }
            )
        }



module.exports = {getApplications,getApplicationsByMID,getApplicationById,createApplication,updateApplication, getPatientApplications,getDoctorApplications,checkAvailability,checkSlots,getApplicationPdfById};



        
