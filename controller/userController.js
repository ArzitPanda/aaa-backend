const {getConnection} = require('../middleware/dbconfig.js');
const {connStr, azureUpload} =require('../middleware/Storageconfig.js')
const db =getConnection();
const getStream = require('into-stream')
const {BlobServiceClient} = require('@azure/storage-blob')
const multer = require('multer');
const { transporter, sendMail } = require('../middleware/Transporter.js');
var Readable = require('stream').Readable; 

function bufferToStream(buffer) { 
  var stream = new Readable();
  stream.push(buffer);
  stream.push(null);

  return stream;
}





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

const blobServiceClient =new BlobServiceClient(connStr);
const inMemoryStorage = multer.memoryStorage()
const uploadStrategy = multer({ storage: inMemoryStorage }).single('image')

const getBlobName = originalName => {
    
    const identifier = Math.random().toString().replace(/0\./, '');
    return `${identifier}-${originalName}`;
  };




const createuser =   (req, res) => {    
    const {address,pincode,mobile,name,email, password} = req.body;

    db.query(`select * from user where email='${email}' or mobile='${mobile}'`, (err, result) => {
        if(err){
            throw err;
        }
        else
        {
            if(result.length===0)
            {

                   
                    uploadStrategy(req,res,async (err)=>{    

                      
                          const link= await azureUpload(req,res,"arzit")
                           db.query(`insert into user (email,password,address,name,mobile,pincode,image) values ('${email}','${password}','${address}','${name}','${mobile}','${pincode}','${link}')`, (err, result) => {
                            if(err){
                                throw err;
                            }
                                    sendMail("amritbehera2002@gmail.com")

                        
                            res.status(200).json(result);
                        });


                    })


   
                      

           

            }
            else
            {
                res.status(404).json({errormsg:"user already exist"});
            }
    
        }
    });
}


const getUsers = (req, res) =>{

db.query("select * from user",(err,result)=>{

        if(err)
        throw err;

        res.send(result);


})


}
    


module.exports = {loginuser,createuser,getUsers};