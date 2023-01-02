const {getConnection} = require('../middleware/dbconfig.js');

const db =getConnection();


const loginuser = (req, res) => {

    // const db =getConnection();


    const {email, password} = req.body;


let val=true;
db.query(`select * from user where email='${email}'`, (err, result) => {
        if(err){
            throw err;
        }
        else
        {
            if(result.length===0)
            {
                val=false;
                res.status(404).json({errormsg:"user not found"});
             
            }
            else
            {
                val=true;

                if(val===true)
                {
                
                
                    db.query(`select * from user where email='${email}' and password='${password}'`, (err, result) => {
                        if(err){
                            throw err;
                        }
                        else
                        {
                            if(result.length===0)
                            {
                                res.status(404).json({errormsg:"password not matched"});
                                return;
                            }
                            else
                            {
                                res.status(200).json(result[0]);
                            }
                        }
                
                    });
                
                }



               
        }
       
    }});











}

const createuser =  (req, res) => {    
    const {address,pincode,mobile,name,email, password} = req.body;

    db.query(`select * from user where email='${email}' or mobile='${mobile}'`, (err, result) => {
        if(err){
            throw err;
        }
        else
        {
            if(result.length===0)
            {
                db.query(`insert into user (email,password,address,name,mobile,pincode) values ('${email}','${password}','${address}','${name}','${mobile}','${pincode}')`, (err, result) => {
                    if(err){
                        throw err;
                    }
                    res.status(200).json(result);
                });

            }
            else
            {
                res.status(404).json({errormsg:"user already exist"});
            }
    
        }
    });
}



    


module.exports = {loginuser,createuser};