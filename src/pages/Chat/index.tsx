import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import React, { useContext, useEffect } from 'react'
import { StackParamList } from '../../routes/app.routes'
import { Container, BottomBar, TextInput, TouchableSend } from './styled'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from 'styled-components/native'
import { useChat } from '../../contexts/chat'
import { getChat } from '../../utils/get.chat'

const ChatPage = () => {
  const { setOptions } = useNavigation()
  const { params } = useRoute<RouteProp<StackParamList, 'chat'>>()
  const { colors, sizes } = useContext(ThemeContext)
  const { activeChat, updateActiveChat } = useChat()

  useEffect(() => {
    const getMessages = async () => {
      const messages = await getChat(params.contact_id)
      updateActiveChat(messages)
    }

    setOptions({
      title: params.contact_name,
    })
  }, [])

  return (
    <>
      <Container></Container>
      <BottomBar>
        <TextInput />
        <TouchableSend>
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
