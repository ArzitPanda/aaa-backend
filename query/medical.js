const medicalQuery ={


    // Get all medicals
    getMedicals:`select * from medical`,
    // Get medical by id
    getMedicalById:(id)=>{
        return `select * from medical where idmedical =${id}`
    },
    // Get nearby medicals
    getNearbyMedicals:(val)=>{
    
        return `select * from medical where FLOOR(pincode/1000)=${val}`
    },
    // Get medical by name
    getMedicalByName:(name)=>{
        return `select * from medical where name_medical like '%${name}%'`
    }
    ,
    updateMedical:({id,name,address,pincode})=>{
        return `update medical set pincode='${pincode}', address='${address}', name='${name}' where idmedical='${id}'`;
    },
    createMedical:({name,address,pincode})=>{
        return `insert into medical(pincode,address,name) values('${pincode}','${address}','${name}')`;
    },


    // Get medical by city
 





}

module.exports = {medicalQuery};