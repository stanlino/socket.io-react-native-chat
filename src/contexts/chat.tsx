import React, { createContext, useContext, useState } from 'react'

interface ChatContextData {
  activeChat: Array<string>
  updateActiveChat(chat: Array<string>): void
  AddMessageToActiveChat(message: string): void
}

const ChatContext = createContext<ChatContextData>({} as ChatContextData)

const ChatProvider: React.FC = ({ children }) => {
  const [activeChat, setActiveChat] = useState<Array<string>>([])

  const updateActiveChat = (chat: Array<string>) => setActiveChat(chat)

  const AddMessageToActiveChat = (message: string) =>
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
