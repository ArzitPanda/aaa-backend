

import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'

import { useRouter } from 'next/router'



const UserCard = ({doctor}) => {

    const router = useRouter();

    const createAppointment =  () => {
        router.push({pathname:`/appointment`,query:{id:doctor.id}})
        }

  return (
    <Card>
    <Card.Content>
      <Image
        floated='right'
        size='mini'
        src=' https://avatars.dicebear.com/api/identicon/{doctor.id}.svg'
      />
      <Card.Header>
        {doctor.name}
      </Card.Header>
      <Card.Meta>
        {doctor.specialist}
      </Card.Meta>
      <Card.Description>
      <strong>medicalId</strong>  {doctor.medicalid}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div className='ui  buttons'>
        <Button basic color='green'  onClick={createAppointment}>
          create
        </Button>
       
      </div>
    </Card.Content>
  </Card>
  
  )
}

export default UserCard