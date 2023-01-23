import React from 'react'
import { Button, Header, Image, Modal,Checkbox,Form } from 'semantic-ui-react'
import axios from 'axios'
function ModalExampleModal({open, setOpen,patient,setPatient}) {
  

    // "disease": "cholera",
    // "name_patient": "ram",
    // "age": 18,
    // "gender": 2,
    // "isuser": 0,
    // "uid"
    const checkRef=React.useRef()

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data = new FormData(e.target);
        const formdata = Object.fromEntries(data.entries());
        console.log(formdata)
            const patientData={
                    "disease": formdata.disease,
                    "name": formdata.first_name+" "+formdata.last_name,
                    "age": parseInt(formdata.age),
                    "gender": parseInt(formdata.gender) ,
                    "isuser": checkRef.current.checked ? 1 : 0,
                    "uid": 1


            }

        ;
        console.log(patient);

          const data2= await axios.post('http://localhost:3000/api/patient/createpatient',patientData)
          console.log(data2.data);
           setPatient({...patientData,idpatient:data2.data.insertId})
           setOpen(false)
            document.getElementById("form").reset();
            
    
        }
    

    









        












  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
     
    >
      <Modal.Header>create patient details</Modal.Header>
      <Modal.Content >
      <Form  onSubmit={handlesubmit} id="form">
    <Form.Field>
      <label>First Name</label>
      <input placeholder='name' type="text" name="first_name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' name="last_name"  />
    </Form.Field>
    <Form.Field>
      <label>disease</label>
      <input placeholder='disease' name="disease"  />
    </Form.Field>

    <Form.Field>
      <label>age</label>
      <input placeholder='age' name="age"  type="number" />
    </Form.Field>
    <Form.Field>
      <label>gender</label>
      <select name="gender" >
        <option
        value="1"
            >male</option>
        <option
        value="2"
        >female</option>
    </select>


      
    </Form.Field>
    <Form.Field>
      <input    type="checkbox" name="isuser" ref={checkRef}/>
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
       
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}


export default ModalExampleModal