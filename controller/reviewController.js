const {getConnection} = require('../middleware/dbconfig.js');


const db =getConnection();


const medicalRating= (req,res)=>{
    const {id}=req.params;

    db.query(`
    SELECT avg(rating) as average , count(*) as no FROM review inner join doctor on review.doctorId=doctor.id inner join medical on doctor.medicalid=medical.idmedical where medical.idmedical=${id}`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );



}


const doctorRating= (req,res)=>{

    const {id}=req.params;

    db.query(`
    SELECT avg(rating)  as average, count(*) as no  FROM review inner join doctor on review.doctorId=doctor.id where doctor.id=${id}`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    }
    );
}

const getReviews= (req,res)=>{
    const {id}=req.params;

    db.query(`SELECT idreview,user_id,review,rating,doctorId,user.name as username,doctor.name as doctorname FROM review inner join doctor on review.doctorId=doctor.id inner join user on user.iduser=user_id where review.doctorId=${id} `,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

const createReview=(req,res)=>{
    const {user_id,review,rating,doctorId}=req.body;


    const date = new Date();


    const year = date.getFullYear()
    const month = date.getMonth()
    console.log(month);
    const date1 = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getMilliseconds()
    const datetime=`${year}-${month + 1}-${date1} ${hour}:${minute}:${Math.floor(second / 10)}`

    db.query(`INSERT INTO review(user_id,review,rating,doctorId,time) VALUES(${user_id},'${review}',${rating},${doctorId},'${datetime}')`,(err,result)=>{
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}

module.exports={
    medicalRating,
    doctorRating,
    getReviews,
    createReview
}

