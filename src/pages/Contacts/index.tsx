import React, { useEffect, useState } from 'react'
import { Container } from './styled'
import AddContactModal from './add.contact.modal'
import getContacts from '../../utils/get.contacts'
import { Contact } from '../../utils/interfaces'

const ContactsPage: React.FC = () => {
  const [contacts, setContacts] = useState<Array<Contact>>([])

  const addContact = (data: Contact) => {
    setContacts(prevState => [...prevState, data])
  }

  useEffect(() => {
    const getContactsFromAsyncStorage = async () => {
      const data = await getContacts()
      setContacts(data)
    }

    getContactsFromAsyncStorage()
  }, [])

  console.log(contacts)

  return (
    <Container>
      <AddContactModal addContact={addContact} />
    </Container>
  )
}

export default ContactsPage
