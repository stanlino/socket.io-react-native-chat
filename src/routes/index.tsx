import React, { useContext } from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { ThemeContext } from 'styled-components'
import { StatusBar } from 'react-native'
import { useUser } from '../contexts/user'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ChatProvider from '../contexts/chat'
import SocketProvider from '../contexts/socket'

const Routes: React.FC = () => {
  const { signed } = useUser()
  const { primaryColor } = useContext(ThemeContext)

  return (
    <SafeAreaProvider>
      {signed ? (
        <ChatProvider>
          <SocketProvider>
            <AppRoutes />
          </SocketProvider>
        </ChatProvider>
      ) : (
        <AuthRoutes />
      )}
      <StatusBar backgroundColor={primaryColor} barStyle={'light-content'} />
    </SafeAreaProvider>
  )
}

export default Routes
