import React, { createContext, useContext, useState } from 'react'

import { Message } from '../utils/interfaces'

interface ChatContextData {
  lastMessageReceived: Message
  setLastMessageReceived(state: Message): void
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

const ChatProvider: React.FC = ({ children }) => {
  const [lastMessageReceived, setLastMessageReceived] = useState<Message>(
    {} as Message,
  )

  return (
    <ChatContext.Provider
      value={{
        lastMessageReceived,
        setLastMessageReceived,
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const { lastMessageReceived, setLastMessageReceived } =
    useContext(ChatContext)
  return {
    lastMessageReceived,
    setLastMessageReceived,
  }
}

export default ChatProvider
