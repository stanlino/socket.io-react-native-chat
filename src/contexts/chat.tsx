import React, { createContext, useContext, useState } from 'react'

import { Message } from '../utils/interfaces'

interface ChatContextData {
  activeChat: Message[]
  updateActiveChat(chat: Message[]): void
  AddMessageToActiveChat(message: Message): void
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

const ChatProvider: React.FC = ({ children }) => {
  const [activeChat, setActiveChat] = useState<Message[]>([])

  const updateActiveChat = (chat: Message[]) => setActiveChat(chat)

  const AddMessageToActiveChat = (message: Message) =>
    setActiveChat(prevState => [...prevState, message])

  return (
    <ChatContext.Provider
      value={{ activeChat, updateActiveChat, AddMessageToActiveChat }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const { AddMessageToActiveChat, activeChat, updateActiveChat } =
    useContext(ChatContext)
  return { AddMessageToActiveChat, activeChat, updateActiveChat }
}

export default ChatProvider
