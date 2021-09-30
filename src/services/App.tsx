import React, { useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Routes from '../routes'
import ThemeProvider from '../contexts/theme'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

const App: React.FC = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '461017753921-7c4tonbjlcvj7bugaiok4dd42ok9sdpi.apps.googleusercontent.com',
    })
  }, [])

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
