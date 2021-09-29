import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import Routes from '../routes'
import ThemeProvider from '../contexts/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default App
