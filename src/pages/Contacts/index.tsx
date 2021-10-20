import React, { useContext, useEffect, useState } from 'react'
import {
  Container,
  TouchableContact,
  NameContact,
  ViewContact,
  TouchableDelete,
} from './styled'
import AddContactModal from './add.contact.modal'
import getContacts from '../../utils/get.contacts'
import { Contact } from '../../utils/interfaces'
import { Alert, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import { StackParamList } from '../../routes/app.routes'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components/native'
import deleteContact from '../../utils/delete.contact'

const ContactsPage: React.FC = () => {
  const { navigate } =
    useNavigation<StackNavigationProp<StackParamList, 'bottom_tabs'>>()

  const { sizes } = useContext(ThemeContext)

  const [contacts, setContacts] = useState<Array<Contact>>([])
  const [selectedContact, setSelectedContact] = useState<string | null>(null)

  const addContact = (data: Contact) => {
    setContacts(prevState => [...prevState, data])
  }

  const handleSelectContact = (contactId: string) => {
    if (selectedContact === contactId) {
      setSelectedContact(null)
    } else {
      setSelectedContact(contactId)
    }
  }

  const handleNavigate = (contact: Contact) => {
    if (selectedContact === contact.contact_id) {
      handleSelectContact(contact.contact_id)
    } else {
      setSelectedContact(null)
      navigate('chat', {
        contact_id: contact.contact_id,
        contact_name: contact.contact_name,
      })
    }
  }

  const handleDeleteContact = async (item: Contact) => {
    const newContacts = await deleteContact(item)
    setContacts(newContacts)
  }

  const confirmDeleteContact = async (item: Contact) => {
    Alert.alert(
      'Deletar Contato?',
      `Tem certeza que deseja deletar a conversa com ${item.contact_name}?`,
      [
        {
          text: 'Cancelar',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Deletar',
          onPress: () => handleDeleteContact(item),
          style: 'destructive',
        },
      ],
      {
        cancelable: true,
      },
    )
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
              selected={selectedContact === contact.contact_id}
              onLongPress={() => handleSelectContact(contact.contact_id)}
              onPress={() => handleNavigate(contact)}
              key={contact.contact_id}>
              <ViewContact>
                <NameContact>{contact.contact_name}</NameContact>
                {selectedContact === contact.contact_id && (
                  <TouchableDelete
                    onPress={() => confirmDeleteContact(contact)}>
                    <Ionicons name={'trash'} size={sizes.one * 5} />
                  </TouchableDelete>
                )}
              </ViewContact>
            </TouchableContact>
          )
        })}
      </ScrollView>
      <AddContactModal addContact={addContact} />
    </Container>
  )
}

export default ContactsPage
