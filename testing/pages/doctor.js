import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import CustomB from './components/CustomB'
import { Button,Card, Input ,Form} from 'semantic-ui-react'
import UserCard from './components/UserCard'


const doctor = () => {
        const [doctorButton,setDoctorButton]=React.useState({

        getDoctors:false,
        getDoctorById:false,
        getDoctorBySpecialistId:false,
        getDoctorByHospitalId:false,
        createDoctor:false,
        modifyAvailablity:false,
        createSlots:false,
        getSlots:false,
        updateFirstSlot:false,
        updateSecondSlot:false,



        })

const [date,setDate]=React.useState('')
const [shift,setShift]=React.useState(0)
        const[name,setName]=React.useState('')
        const[hospitalId,setHospitalId]=React.useState('')
        const[specialistId,setSpecialistId]=React.useState('')
        const[graduation,setGraduation]=React.useState('')

        const data={
            getDoctors:false,
            getDoctorById:false,
            getDoctorBySpecialistId:false,
            getDoctorByHospitalId:false,
            createDoctor:false,
            modifyAvailablity:false,
            createSlots:false,
            getSlots:false,
            updateFirstSlot:false,
            updateSecondSlot:false,
    
        }



    const [doctors, setDoctors] = React.useState([])
    const router = useRouter();

const [doctorById,setDoctorById]=React.useState(0);
const getDoctors = async () => {
    const res = await axios.get('http://localhost:3000/api/doctor')
    console.log(res.data);
    setDoctorButton({...data,getDoctors:true})
    setDoctors(res.data)
    }




    const modifyAvailablity = async () => {
        // const res = await axios.post('http://localhost:3000/api/doctor//availablity')
        const data= {date,shift:parseInt(shift),id:parseInt(doctorById)};
        const res = await axios.post('http://localhost:3000/api/doctor/availablity',data)
        console.log(res.data);
        alert(JSON.stringify(res.data))

    }


    const getDoctorById = async () => {
      
        setDoctorButton({...data,getDoctorById:true})
    }

    
        const getDoctorByIdInner = async () => {
            const res = await axios.get(`http://localhost:3000/api/doctor/${doctorById}`)
           
            setDoctorById(0)
            setDoctors(res.data)
            }
    
    
    
        const getDoctorBySpecialistId = async () => {
            const res = await axios.get(`http://localhost:3000/api/doctor/specialist/${doctorById}`)
            console.log(res.data);
         setDoctorById(0)
        
            setDoctors(res.data)
            }


            const getDoctorByHospitalId = async () => {
                const res = await axios.get(`http://localhost:3000/api/doctor/hospital/${doctorById}`)
                console.log(res.data);
                setDoctorById(0)
                setDoctors(res.data)
                }
    

               

const createDoctor = async () => {
    const res = await axios.post('http://localhost:3000/api/doctor', {
        name:name,
        specialist:parseInt(specialistId),
        medicalid:parseInt(hospitalId),
        graduation:graduation
    })
    console.log(res.data);
    alert('doctor created')
    }









  return (
    <div className="bg-gray-100 grid grid-cols-6 justify-center w-screen h-screen  ">
    <div className="col-start-1 flex flex-col justify-center items-center gap-6 col-end-2 bg-gray-200 h-screen">
        <Button onClick={getDoctors} 

        color="green"
        >
            getDoctors
        </Button> 
        <Button
         color="green"
         onClick={
            ()=>{
                setDoctorButton({...data,getDoctorById:true}
                
                )
            }
         }
        >
            getDoctorById
        </Button> 
        <Button
         color="green" 
         onClick={()=>{

                setDoctorButton({...data,getDoctorBySpecialistId:true})

         }}
         
         >
        getDoctorBySpecialistId
        </Button> 
        
        <Button
         color="green"
         
            onClick={()=>{
                setDoctorButton({...data,getDoctorByHospitalId:true})
            }}

         >
        getDoctorByHospitalId
        </Button> 
        <Button

         color="green"
         
            onClick={()=>{
                setDoctorButton({...data,createDoctor:true})
            }}

         >
        createDoctor
        </Button> 
        <Button
         color="green"
            onClick={()=>{
                setDoctorButton({...data,modifyAvailablity:true})

            }
        }

         
         
         >
        modifyAvailablity
        </Button> 
        <Button
         color="green"
            onClick={()=>{
                setDoctorButton({...data,createSlots:true})

            }
        }

         
         >
        createSlots
        </Button> 
        <Button
         color="green"
            onClick={()=>{
                setDoctorButton({...data,getSlots:true})
            }}
         >
       getSlots
        </Button> 
      
        
        <Button
         color="green"
         
            onClick={()=>{
                setDoctorButton({...data,updateFirstSlot:true})
            }}

         
         >
        updateFirstSlot
        </Button>
        <Button
         color="green"
            onClick={()=>{
                setDoctorButton({...data,updateSecondSlot:true})
            }}
            
         >
        updateSecondSlot
        </Button>








    </div>
    {
        doctorButton.getDoctors && (
            <Card.Group className="col-start-3 flex gap-9 flex-row col-end-6 h-full pt-12">
        {doctors.map((doctor) => (
                <div  className="">
            <UserCard doctor={doctor} key={doctor.id} />
                </div>)
        )}
            



    </Card.Group>
        )
    }
    {
        doctorButton.getDoctorById && (
            <div className="container p-6">
                <h1>getDoctorById</h1>
                   <div className="flex flex-row gap-4">
                   <Input type="number" name="doctorId" value={doctorById} label="id" onChange={(e)=>{

setDoctorById(e.target.value)   

}}   labelPosition='left'/>            

<Button onClick={getDoctorByIdInner} color="green">getDoctorById</Button>

                   </div>
                    <Card.Group className="col-start-3 flex gap-9 flex-row col-end-6 h-full pt-12">
        {doctors.map((doctor) => (
                <div  className="">
            <UserCard doctor={doctor} key={doctor.id} />
                </div>)
        )}
            



    </Card.Group>
            </div>
        )

    }
    {
        doctorButton.getDoctorBySpecialistId && (
            <div className="container p-6">
                <h1>getDoctorBySpecialistId</h1>
                   <div className="flex flex-row gap-4">
                   <Input type="number" name="doctorId" value={doctorById} label="id" onChange={(e)=>{

setDoctorById(e.target.value)   

}}   labelPosition='left'/>            

<Button onClick={getDoctorBySpecialistId} color="green">getDoctorById</Button>

                   </div>
                    <Card.Group className="col-start-3 flex gap-9 flex-row col-end-6 h-full pt-12">
        {doctors.map((doctor) => (
                <div  className="">
            <UserCard doctor={doctor} key={doctor.id} />
                </div>)
        )}
            



    </Card.Group>
            </div>
        )

    }
 {  
        doctorButton.getDoctorByHospitalId && (
            <div className="container p-6">
                <h1>getDoctorByHospitalId</h1>
                   <div className="flex flex-row gap-4">
                   <Input type="number" name="doctorId" value={doctorById} label="id" onChange={(e)=>{

setDoctorById(e.target.value)   

}}   labelPosition='left'/>            

<Button onClick={
    getDoctorByHospitalId
} color="green">getDoctorById</Button>

                   </div>
                    <Card.Group className="col-start-3 flex gap-9 flex-row col-end-6 h-full pt-12">
        {doctors.map((doctor) => (
                <div  className="">
            <UserCard doctor={doctor} key={doctor.id} />
                </div>)
        )}
            



    </Card.Group>
            </div>
        )

 }
    {
        doctorButton.createDoctor && (
            <Form className="container p-6 flex flex-col items-center justify-center flex-1">
                <h1>createDoctor</h1>
                <Form.Field>
                    <label>name</label>
                    <input placeholder='name' value={name} onChange={(e)=>{
                        setName(e.target.value)
                    }} />
                </Form.Field>
                <Form.Field>
                    <label>graduation</label>
                    <input placeholder='graduation' value={graduation} onChange={(e)=>{
                        setGraduation(e.target.value)
                    }} />
                </Form.Field>
            
                <Form.Field>
                    <label>specialistId</label>
                    <input placeholder='specialistId' value={specialistId} onChange={(e)=>{
                        setSpecialistId(e.target.value)
                    }} />
                </Form.Field>
                <Form.Field>
                    <label>hospitalId</label>
                    <input placeholder='hospitalId' value={hospitalId} onChange={(e)=>{
                        setHospitalId(e.target.value)
                    }} />
                </Form.Field>
               
                <Form.Field>
                    
                    <Button onClick={createDoctor} color="green">createDoctor</Button>
                </Form.Field>
            </Form>
        )

    }
    {
        doctorButton.modifyAvailablity && (
            <Form className="container p-6 flex flex-row items-center justify-center flex-1">
                <h1>modify_availibility</h1> 
                <Form.Field>
                    <label>Doctor_id</label>
                    <input placeholder='doc_id' value={doctorById} onChange={(e)=>{
                        setDoctorById(e.target.value)
                    }} />
                </Form.Field>
                <Form.Field>
                    <label>date</label>
                    <input  value={date} type="date"  onChange={(e)=>{
                        setDate(e.target.value)
                    }} />
                </Form.Field>
            
                <Form.Field>
                    <label>Shift</label>
                    <input placeholder='specialistId' value={shift} onChange={(e)=>{
                        setShift(e.target.value)
                    }} />
                </Form.Field>
              
               
                <Form.Field>
                    
                    <Button onClick={modifyAvailablity} color="green">createDoctor</Button>
                </Form.Field>
            </Form>
        )
    }
    {
        doctorButton.createSlots && (
            <h1>createSlots</h1>
        )
    }
    {
        doctorButton.getSlots && (
            <h1>getSlots</h1>
        )
    }
    {
        doctorButton.updateFirstSlot && (
            <h1>updateFirstSlot</h1>
        )
    }
    {
        doctorButton.updateSecondSlot && (
            <h1>updateSecondSlot</h1>
        )
    }

   
    
    </div>
  
       ) }

export default doctor