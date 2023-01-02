const Patientquery={


        getusers:`select * from patient`,
        creteuser:({disease, name,age,gender,uid,isuser})=>{


                return `insert into patient (name_patient,age,disease,gender,isuser,uid) values ('${name}','${age}','${disease}','${gender}','${isuser}','${uid}')`

        },
        getuserbyid:(id)=>{
                return `select * from patient where idpatient='${id}'`;
        },
        getuserbyuid:(uid)=>{
                return `select * from patient where uid='${uid}'`;
        },
        getuserbydoctorid:(id)=>{

                        return `select * from appointment inner join patient on appointment.Pid=patient.idpatient where idpatient='${id}'`;

        },





}


module.exports ={ Patientquery};