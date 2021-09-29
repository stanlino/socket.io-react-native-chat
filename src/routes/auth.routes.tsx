import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from '../pages/Login'
import LoginWithPhoneNumber from '../pages/Login/login.with.phone.number'

export type RootStackParamList = {
  login_index: undefined
  login_phonenumber: undefined
}

const Stack = createStackNavigator<RootStackParamList>()

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        component={LoginPage}
        name="login_index"
      />
      <Stack.Screen
        options={{ headerShown: false }}
        component={LoginWithPhoneNumber}
        name="login_phonenumber"
      />
    </Stack.Navigator>
  )
}

export default AuthRoutes
