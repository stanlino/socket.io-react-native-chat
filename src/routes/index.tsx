import React, { useContext } from 'react'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import { ThemeContext } from 'styled-components'
import { StatusBar } from 'react-native'
import { useUser } from '../contexts/user'

const Routes: React.FC = () => {
  const { signed } = useUser()
  const { colors } = useContext(ThemeContext)

  return (
    <>
      {signed ? <AppRoutes /> : <AuthRoutes />}
      <StatusBar backgroundColor={colors.Bg} barStyle={'dark-content'} />
    </>
  )
}

export default Routes
