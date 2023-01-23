import React, { useEffect } from 'react'
import { Button, Header, Image, Modal,Checkbox,Form } from 'semantic-ui-react'
import axios from 'axios'
function ModalAppoint({openApplication, setOpenApplication,patient,setPatient}) {
  

    // "disease": "cholera",
    // "name_patient": "ram",
    // "age": 18,
    // "gender": 2,
    // "isuser": 0,
    // "uid"
const [slot,setSlot]=React.useState({})

useEffect(() => {
   
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:3000/api/doctor/getSlot/1',
      );
   
      console.log(result.data[0]);
        setSlot(result.data[0])
    };
   
    fetchData();
 


}, [])





    const checkRef=React.useRef()
    const formRef=React.useRef()



    const [availableSeat,setAvailableSeat]=React.useState(0);

const [shift,setShift]=React.useState({})

    const handlesubmit=async (e)=>{
        e.preventDefault()
  
        const data = new FormData(e.target);
        const formdata = Object.fromEntries(data.entries());
        console.log(formdata)
        const checkData={
            "date":formdata.date,
            "shift":parseInt(formdata.shift),
            "Did":1
    }
   
    const result = await axios.post('http://localhost:3000/api/application/checkslot',checkData);
    console.log(result.data)
    if(result.data.count>0){
        setShift(checkData)
        setAvailableSeat(result.data.count)
    }
    
    

}



const handleAppointment=async (e)=>{
    e.preventDefault()

        const data={
            ...shift,
            "Pid":patient.idpatient,
            "status":1,
            
        }
        await axios.post('http://localhost:3000/api/application/',data)
        console.log(data)
        setOpenApplication(false)
      
       




}


        












  return (
    <Modal
      onClose={() => setOpenApplication(false)}
      onOpen={() => setOpenApplication(true)}
      open={openApplication}
     
    >
      <Modal.Header>get appointment</Modal.Header>
      <Modal.Content >
      <Form  onSubmit={handlesubmit} ref={formRef} id="form">
   

    <Form.Field>
      <label>date</label>
      <input placeholder='date' name="date"  type="date" />
    </Form.Field>
    <Form.Field>
      <label>shift</label>
      <select name="shift" >
        <option
        value="1"
            >{slot.first_shift
}</option>
        <option
        value="2"
        >{
slot.second_shift


        }</option>
    </select>


      
    </Form.Field>
    <Form.Field>
      <input    type="checkbox" name="isuser" ref={checkRef}/>
    </Form.Field>
    <Button type='submit'>check</Button>

   {patient && <div>{patient.idpatient}</div>} 
   {
         availableSeat>0 && <h1>available seat {availableSeat}</h1> 
   }
        
  </Form>
       


  



   

      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpenApplication(false)}>
          Nope
        </Button>
        <Button
          content="create appointment"
          labelPosition='right'
          icon='checkmark'
          onClick={handleAppointment}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}


export default ModalAppoint