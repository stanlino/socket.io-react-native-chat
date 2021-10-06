import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Routes from '../routes'
import ThemeProvider from '../contexts/theme'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import UserProvider from '../contexts/user'
import ChatProvider from '../contexts/chat'

const App: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '461017753921-7c4tonbjlcvj7bugaiok4dd42ok9sdpi.apps.googleusercontent.com',
    })
  }, [])

  return (
    <UserProvider>
      <ThemeProvider>
        <ChatProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ChatProvider>
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
