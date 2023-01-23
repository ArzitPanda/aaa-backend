const {getConnection} =require('../middleware/dbconfig.js');



const db =getConnection();



const popularDoctors= (req,res)=>{

    db.query(`select doctorId,doctor.name,avg(rating)  as rating ,count(user_id) as no  from doctor right join review on review.doctorId = doctor.id   group by  doctorId  order by  avg(rating) desc `, (err,result)=>{

        if(err){

            throw err;

        }

        res.status(200).json(result);

    });

}

const searchDoctor= (req,res)=>{
    const {name}=req.params;

    db.query(`select * from doctor where doctor.name REGEXP '^${name}'`,(err,result)=>{
        if(err){
            throw err;
            
        }
        res.status(200).json(result);
    }
    );
}

const searchMedical= (req,res)=>{
    const {name}=req.params;

    db.query(`select * from medical where medical.name REGEXP '^${name}'`,(err,result)=>{
        if(err){
            throw err;
            
        }
        res.status(200).json(result);
    }
    );
}

const searchLocation= (req,res)=>{
    const {name}=req.params;

    db.query(`select * from medical where medical.address REGEXP '${name}?'`,(err,result)=>{
        if(err){
            throw err;
            
        }
        res.status(200).json(result);
    }
    );
}





module.exports={
    popularDoctors,
    searchDoctor,
    searchMedical,
    searchLocation
}




