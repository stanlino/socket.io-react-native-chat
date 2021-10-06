import React, { useEffect, useState } from 'react'
import { Container, TouchableContact, NameContact } from './styled'
import AddContactModal from './add.contact.modal'
import getContacts from '../../utils/get.contacts'
import { Contact } from '../../utils/interfaces'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../routes/app.routes'

const ContactsPage: React.FC = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<StackParamList, 'bottom_tabs'>>()

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

  return (
    <Container>
      <ScrollView>
        {contacts.map(contact => {
          return (
            <TouchableContact
              onPress={() =>
                navigate('chat', {
                  contact_id: contact.contact_id,
                  contact_name: contact.contact_name,
                })
              }
              key={contact.contact_id}>
              <NameContact>{contact.contact_name}</NameContact>
            </TouchableContact>
          )
        })}
      </ScrollView>
      <AddContactModal addContact={addContact} />
    </Container>
  )
}

export default ContactsPage
