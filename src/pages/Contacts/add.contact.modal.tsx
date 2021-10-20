import React, { Props, useContext, useEffect, useState } from 'react'
import {
  AddContactButton,
  Container,
  ViewCloseButton,
  Form,
  Label,
  TextInput,
  SaveContactAndCloseModalButton,
  Text,
} from './styled'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components/native'
import { Modal, TouchableOpacity } from 'react-native'
import saveContact from '../../utils/save.contact'
import { AddContactModalProps } from '../../utils/interfaces'

const AddContactModal = ({ addContact }: AddContactModalProps) => {
  const { sizes, colors } = useContext(ThemeContext)
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const [contactName, setContactName] = useState('')
  const [contactID, setContactID] = useState('')

  const saveDisabled = contactName === '' || contactID === ''

  const saveContactInAsyncStorage = async () => {
    const contact = {
      contact_id: contactID,
      contact_name: contactName,
    }
    const data = await saveContact(contact)
    if (data) {
      addContact(contact)
    }
    setModalIsVisible(false)
  }

  return (
    <>
      <Modal animationType={'slide'} visible={modalIsVisible}>
        <Container>
          <ViewCloseButton>
            <TouchableOpacity onPress={() => setModalIsVisible(false)}>
              <Ionicons name="close" color={colors.blue} size={sizes.ten} />
            </TouchableOpacity>
          </ViewCloseButton>
          <Form>
            <Label>Nome</Label>
            <TextInput onChangeText={text => setContactName(text)} />
          </Form>
          <Form>
            <Label>Telefone ou E-mail</Label>
            <TextInput
              onChangeText={text => setContactID(text)}
              keyboardType={'email-address'}
            />
          </Form>
        </Container>
        <SaveContactAndCloseModalButton
          disabled={saveDisabled}
          onPress={saveContactInAsyncStorage}>
          <Text>Salvar</Text>
        </SaveContactAndCloseModalButton>
      </Modal>
      <AddContactButton onPress={() => setModalIsVisible(true)}>
        <Ionicons name={'add'} size={sizes.one * 8} color={colors.blue} />
      </AddContactButton>
    </>
  )
}

export default AddContactModal
