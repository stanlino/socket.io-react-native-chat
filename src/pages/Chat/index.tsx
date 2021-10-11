import { RouteProp, useNavigation, useRoute } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StackParamList } from '../../routes/app.routes'
import { useChat } from '../../contexts/chat'
import { getChat } from '../../utils/get.chat'
import { Message } from '../../utils/interfaces'
import MessagesListing from './message.listing'
import BottomBar from './bottom.bar'

const ChatPage = () => {
  const { setOptions } = useNavigation()
  const { params } = useRoute<RouteProp<StackParamList, 'chat'>>()
  const { lastMessageReceived, setLastMessageReceived } = useChat()
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

  return (
    <>
      <MessagesListing messages={messages} />
      <BottomBar setMessages={setMessages} contact_id={params.contact_id} />
    </>
  )
}

export default ChatPage
