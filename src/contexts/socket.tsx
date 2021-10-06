import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'
import { Message } from '../utils/interfaces'
import { saveChat } from '../utils/save.chat'
import { useChat } from './chat'
import { useUser } from './user'

interface SocketContextData {
  sendMessageToServer(message: Message): void
}

const SocketContext = createContext<SocketContextData>({} as SocketContextData)

const SocketProvider: React.FC = ({ children }) => {
  const { userContact } = useUser()
  const { activeContact, AddMessageToActiveChat } = useChat()

  const socket = useMemo(() => {
    return io('https://socket-io-server-chat.herokuapp.com/chat')
  }, [])

  const sendMessageToServer = (message: Message) => {
    socket.emit('new-message', message)
  }

  const saveMessage = async (message: Message) => {
    await saveChat(message, message.from)
    if (message.from === activeContact) {
      AddMessageToActiveChat(message)
    }
  }

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join-room', userContact)
    })

    socket.on('new-message', message => {
      saveMessage(message)
    })
  }, [])

  return (
    <SocketContext.Provider value={{ sendMessageToServer }}>
      {children}
    </SocketContext.Provider>
  )
}

export const useSocket = () => {
  const { sendMessageToServer } = useContext(SocketContext)
  return { sendMessageToServer }
}

export default SocketProvider
