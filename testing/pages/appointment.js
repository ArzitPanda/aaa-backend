import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import ModalExampleModal from './components/ModalInput';
import ModalAppoint from './components/appointmentModal';


const appointment = () => {

const router = useRouter();
const {id} = router.query
const [open, setOpen] = React.useState(false)
const [openApplication, setOpenApplication] = React.useState(false)

const [patient, setPatient] = React.useState(null);


// "disease": "cholera",
//     "name_patient": "ram",
//     "age": 18,
//     "gender": 2,
//     "isuser": 0,
//     "uid"

  return (
    <div className='w-screen h-screen bg-slate-200 justify-center items-center flex flex-col gap-2'>
            <button className='bg-amber-200 w-64 h-16 ui button' 
            
            
            onClick={() => setOpen(true)}
            
            >create patient</button>
    <button className= 'bg-blue-200 w-64 h-16 text-gray-900'
    
    onClick={() => setOpenApplication(true)}
    
    
    >Appointment</button>


            {patient !==null && (
                <div className='bg-white w-64 h-64 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2'>
                    <div className='mb-4 flex flex-row'>
                        <p className='text-gray-700 text-sm font-bold mb-2'>Name</p>
                        <p className='text-gray-700 text-base'>{patient.name}</p>
                    </div>
                    <div className='mb-4 flex flex-row'>
                        <p className='text-gray-700 text-sm font-bold mb-2'>id</p>
                        <p className='text-gray-700 text-base'>{patient.idpatient}</p>
                    </div>
                    <div className='mb-2 flex flex-row'>
                        <p className='text-gray-700 text-sm font-bold mb-2'>age</p>
                        <p className='text-gray-700 text-base'>{patient.age}</p>
                    </div>
                    <div className='mb-2 flex flex-row'>
                        <p className='text-gray-700 text-sm font-bold mb-2'>disease</p>
                        <p className='text-gray-700 text-base'>{patient.disease}</p>
                    </div>
                    <div className='mb-2 flex flex-row'>
                        <p className='text-gray-700 text-sm font-bold mb-2'>gender</p>
                        <p className='text-gray-700 text-base'>{patient.gender}</p>
                    </div>
                    <div className='mb-2 flex flex-row'>
                        <p className='text-gray-700 text-sm font-bold mb-2'>isuser</p>
                        <p className='text-gray-700 text-base'>{patient.isuser}</p>
                    </div>
                   </div>



            )}



        <ModalExampleModal
            open={open}
            setOpen={setOpen}
        patient={patient}
        setPatient={setPatient}


        />
        <ModalAppoint
        openApplication={openApplication} setOpenApplication={setOpenApplication}
        patient={patient}
        setPatient={setPatient}


        />
        
       


    </div>
  )
}

export default appointment