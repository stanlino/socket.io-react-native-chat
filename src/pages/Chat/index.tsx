import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import React, { useContext, useEffect, useState } from 'react'
import { StackParamList } from '../../routes/app.routes'
import { Container, BottomBar, TextInput, TouchableSend } from './styled'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components/native'
import { useChat } from '../../contexts/chat'
import { getChat } from '../../utils/get.chat'
import { useUser } from '../../contexts/user'
import { useSocket } from '../../contexts/socket'
import { Message } from '../../utils/interfaces'
import { saveChat } from '../../utils/save.chat'
import MessagesListing from './message.listing'

const ChatPage = () => {
  const { setOptions } = useNavigation()
  const { params } = useRoute<RouteProp<StackParamList, 'chat'>>()
  const { colors, sizes } = useContext(ThemeContext)
  const { lastMessageReceived, setLastMessageReceived } = useChat()
  const { userContact } = useUser()
  const { sendMessageToServer } = useSocket()
  const [messageText, setMessageText] = useState('')
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const getMessages = async () => {
      const messages = await getChat(params.contact_id)
      setMessages(messages)
    }

    getMessages()

    setOptions({
      title: params.contact_name,
    })

    return () => {
      setLastMessageReceived({} as Message)
    }
  }, [])

  useEffect(() => {
    if (lastMessageReceived.message) {
      setMessages(prevState => prevState.concat(lastMessageReceived))
    }
  }, [lastMessageReceived])

  const sendMessage = async () => {
    if (messageText !== '') {
      const message = {
        message: messageText,
        to: params.contact_id,
        from: userContact,
      }
      const send = await saveChat(message, params.contact_id)
      if (send) {
        setMessages(prevState => prevState.concat(message))
        sendMessageToServer(message)
        setMessageText('')
      }
    }
  }

  return (
    <>
      <Container>
        <MessagesListing messages={messages} />
      </Container>
      <BottomBar>
        <TextInput
          value={messageText}
          onChangeText={text => setMessageText(text)}
        />
        <TouchableSend onPress={sendMessage}>
          <Ionicons
            name={'send'}
            size={sizes.ten}
            color={colors.Metallic_Seaweed}
          />
        </TouchableSend>
      </BottomBar>
    </>
  )
}

export default ChatPage
