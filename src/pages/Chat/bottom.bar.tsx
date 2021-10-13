import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components/native'

import { TextInput, BottomBar as BB, TouchableSend } from './styled'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Message } from '../../utils/interfaces'
import { useSocket } from '../../contexts/socket'
import { useUser } from '../../contexts/user'
import { saveChat } from '../../utils/save.chat'

interface BottomBarProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
  contact_id: string
}

const BottomBar: React.FC<BottomBarProps> = ({ setMessages, contact_id }) => {
  const { colors, sizes } = useContext(ThemeContext)
  const { sendMessageToServer } = useSocket()
  const { userContact } = useUser()

  const [messageText, setMessageText] = useState('')

  const sendMessage = async () => {
    if (messageText !== '') {
      const message = {
        message: messageText,
        to: contact_id,
        from: userContact,
      }
      const send = await saveChat(message, contact_id)
      if (send) {
        setMessages(prevState => prevState.concat(message))
        sendMessageToServer(message)
        setMessageText('')
      }
    }
  }

  return (
    <BB>
      <TextInput
        value={messageText}
        onChangeText={text => setMessageText(text)}
      />
      <TouchableSend onPress={sendMessage}>
        <Ionicons name={'send'} size={sizes.ten / 2} color={colors.Primary} />
      </TouchableSend>
    </BB>
  )
}

export default BottomBar
