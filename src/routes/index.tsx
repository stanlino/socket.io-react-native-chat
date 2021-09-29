import React, {useContext} from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import {ThemeContext} from 'styled-components'
import {StatusBar} from 'react-native'

const Routes: React.FC = () => {
  const {colors} = useContext(ThemeContext)

  return (
    <>
      <AuthRoutes />
      <StatusBar backgroundColor={colors.Bg} barStyle={'dark-content'} />
    </>
  )
}

export default Routes
