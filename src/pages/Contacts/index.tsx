import React from 'react'
import { Text } from 'react-native'
import { Container } from './styled'
import AddContactModal from './add.contact.modal'

const ContactsPage: React.FC = () => {
  return (
    <>
      <Container>
        <Text></Text>
        <AddContactModal />
      </Container>
    </>
  )
}

export default ContactsPage
