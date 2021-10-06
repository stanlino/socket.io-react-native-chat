import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import React, { useContext, useEffect, useState } from 'react'
import { StackParamList } from '../../routes/app.routes'
import {
  Container,
  BottomBar,
  TextInput,
  TouchableSend,
  MessageFatherView,
  MessageChildView,
  Text,
} from './styled'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components/native'
import { useChat } from '../../contexts/chat'
import { getChat } from '../../utils/get.chat'
import { sendAndSaveMessage } from '../../utils/send.and.save.message'
import { useUser } from '../../contexts/user'
import { ScrollView } from 'react-native'

const ChatPage = () => {
  const { setOptions } = useNavigation()
  const { params } = useRoute<RouteProp<StackParamList, 'chat'>>()
  const { colors, sizes } = useContext(ThemeContext)
  const { activeChat, updateActiveChat, AddMessageToActiveChat } = useChat()
  const { userContact } = useUser()
  const [messageText, setMessageText] = useState('')

  useEffect(() => {
    const getMessages = async () => {
      const messages = await getChat(params.contact_id)
      updateActiveChat(messages)
    }

    setOptions({
      title: params.contact_name,
    })

    getMessages()

    return () => {
      updateActiveChat([])
    }
  }, [])

  const sendMessage = async () => {
    if (messageText !== '') {
      const message = {
        message: messageText,
        to: params.contact_id,
        from: userContact,
      }
      const send = await sendAndSaveMessage(message, params.contact_id)
      if (send) {
        AddMessageToActiveChat(message)
        setMessageText('')
      }
    }
  }

  return (
    <>
      <Container>
        <ScrollView>
          {activeChat.map((message, index) => {
            const fromThisUser = message.from === userContact
            return (
              <MessageFatherView fromThisUser={fromThisUser} key={index}>
                <MessageChildView fromThisUser={fromThisUser}>
                  <Text>{message.message}</Text>
                </MessageChildView>
              </MessageFatherView>
            )
          })}
        </ScrollView>
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
