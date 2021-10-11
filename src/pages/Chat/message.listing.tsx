import { ScrollView } from 'react-native'
import { MessageChildView, MessageFatherView, Text } from './styled'
import { Message } from '../../utils/interfaces'
import React, { useRef } from 'react'
import { useUser } from '../../contexts/user'

interface MessagesListingProps {
  messages: Message[]
}

const MessagesListing: React.FC<MessagesListingProps> = ({ messages }) => {
  const scrollRef = useRef<ScrollView>({} as ScrollView)
  const { userContact } = useUser()

  return (
    <ScrollView
      ref={scrollRef}
      onContentSizeChange={() =>
        scrollRef.current.scrollToEnd({ animated: true })
      }>
      {messages.map((message, index) => {
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
  )
}

export default MessagesListing
