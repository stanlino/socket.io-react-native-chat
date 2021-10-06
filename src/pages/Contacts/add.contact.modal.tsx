import React, { useContext, useState } from 'react'
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

const AddContactModal = () => {
  const { sizes, colors } = useContext(ThemeContext)
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const [nameContact, setNameContact] = useState('')
  const [contactID, setContactID] = useState('')

  const saveDisabled = nameContact === '' || contactID === ''

  return (
    <>
      <Modal animationType={'slide'} visible={modalIsVisible}>
        <Container>
          <ViewCloseButton>
            <TouchableOpacity onPress={() => setModalIsVisible(false)}>
              <Ionicons
                name="close"
                color={colors.Secundary}
                size={sizes.ten}
              />
            </TouchableOpacity>
          </ViewCloseButton>
          <Form>
            <Label>Nome</Label>
            <TextInput onChangeText={text => setNameContact(text)} />
          </Form>
          <Form>
            <Label>Telefone ou E-mail</Label>
            <TextInput
              onChangeText={text => setContactID(text)}
              keyboardType={'email-address'}
            />
          </Form>
        </Container>
        <SaveContactAndCloseModalButton disabled={saveDisabled}>
          <Text>Salvar</Text>
        </SaveContactAndCloseModalButton>
      </Modal>
      <AddContactButton onPress={() => setModalIsVisible(true)}>
        <Ionicons name={'add'} size={sizes.one * 8} color={colors.Secundary} />
      </AddContactButton>
    </>
  )
}

export default AddContactModal
