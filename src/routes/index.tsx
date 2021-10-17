import React, { useContext } from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { ThemeContext } from 'styled-components'
import { StatusBar } from 'react-native'
import { useUser } from '../contexts/user'
import { useThemeContext } from '../contexts/theme'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import ChatProvider from '../contexts/chat'
import SocketProvider from '../contexts/socket'

const Routes: React.FC = () => {
  const { signed } = useUser()
  const { colors } = useContext(ThemeContext)
  const { theme } = useThemeContext()

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
      <StatusBar
        backgroundColor={colors.Secundary}
        barStyle={theme ? 'light-content' : 'dark-content'}
      />
    </SafeAreaProvider>
  )
}

export default Routes
