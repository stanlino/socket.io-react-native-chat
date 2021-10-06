import React, { createContext, useContext, useState } from 'react'

import { Message } from '../utils/interfaces'

interface ChatContextData {
  activeChat: Message[]
  updateActiveChat(chat: Message[]): void
  AddMessageToActiveChat(message: Message): void
  activeContact: string
  updateActiveContact(contact: string): void
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

const ChatProvider: React.FC = ({ children }) => {
  const [activeChat, setActiveChat] = useState<Message[]>([])
  const [activeContact, setActiveContact] = useState('')

  const updateActiveChat = (chat: Message[]) => setActiveChat(chat)
  const updateActiveContact = (contact: string) => setActiveContact(contact)

  const AddMessageToActiveChat = (message: Message) =>
    setActiveChat(prevState => [...prevState, message])

  return (
    <ChatContext.Provider
      value={{
        activeChat,
        updateActiveChat,
        AddMessageToActiveChat,
        activeContact,
        updateActiveContact,
      }}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const {
    AddMessageToActiveChat,
    activeChat,
    updateActiveChat,
    activeContact,
    updateActiveContact,
  } = useContext(ChatContext)
  return {
    AddMessageToActiveChat,
    activeChat,
    updateActiveChat,
    activeContact,
    updateActiveContact,
  }
}

export default ChatProvider
