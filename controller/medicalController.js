const { getConnection} = require('../middleware/dbconfig.js');
const { medicalQuery } = require('../query/medical.js');

const db= getConnection();


const getMedicals=(req,res)=>{

        db.query(medicalQuery.getMedicals,(err,result)=>{

                    if(err)
                    {
                        throw err;
                    }
                    res.send(result);


        })



}



const getMedicalById=(req,res)=>{
const {id} = req.params
    db.query(medicalQuery.getMedicalById(id),(err,result)=>{

                if(err)
                {
                    throw err;
                }
                res.send(result);


    })



}

const getNearbyMedicals =(req,res)=>{

    const {pincode} =req.body;

        const val =Math.floor(pincode/1000)

    db.query(medicalQuery.getNearbyMedicals(pincode),(err,result)=>{

                if(err)
                    {
                        throw err;
                    }
                    res.status(200).json(result)



    })





}

const createMedical=(req,res)=>{

        const {pincode,address,name}= req.body

    db.query(medicalQuery.createMedical(

     {   pincode,address,name}
    ),(err,result)=>{

                if(err) 
                {
                    throw err;
                }
                res.status(200).json(result)


    })



}




const updateMedical = (req, res) =>{
    const {
            pincode,address,name,id


    } = req.body;


db.query(medicalQuery.updateMedical({id,name,address,pincode}),(err,result)=>{

        if(err) {
            throw err;
        }
        res.status(200).send(result);


})









}




const medicalByName = (req, res) => {
    const {name} = req.params;
    db.query(medicalQuery.getMedicalByName(name), (err, result) => {
        if(err){
            throw err;
        }
        res.status(200).json(result);
    });
}




module.exports={


    createMedical,
    getMedicalById,
    getMedicals,
    getNearbyMedicals,
    updateMedical,
    medicalByName
}