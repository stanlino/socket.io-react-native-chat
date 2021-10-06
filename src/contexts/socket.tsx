import React, { createContext, useContext, useEffect, useMemo } from 'react'
import { io } from 'socket.io-client'
import { Message } from '../utils/interfaces'
import { saveChat } from '../utils/save.chat'
import { useUser } from './user'

interface SocketContextData {
  sendMessageToServer(message: Message): void
}

const SocketContext = createContext<SocketContextData>({} as SocketContextData)

const SocketProvider: React.FC = ({ children }) => {
  const { userContact } = useUser()

  const socket = useMemo(() => {
    return io('https://socket-io-server-chat.herokuapp.com/chat')
  }, [])

  const sendMessageToServer = (message: Message) => {
    socket.emit('new-message', message)
  }

  useEffect(() => {
    socket.on('connect', () => {
      console.log(`Conectado: ${socket.id} - ${userContact}`)
      socket.emit('join-room', userContact)
    })

    socket.on('new-message', message => {
      console.log(message)
      saveChat(message, message.from)
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
