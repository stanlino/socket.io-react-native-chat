import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginPage from '../pages/Login'
import LoginWithPhoneNumber from '../pages/Login/login.with.phone.number'
import ConfirmCode_Page from '../pages/Login/confirm.code'

export type StackParamList = {
  login_index: undefined
  login_phonenumber: undefined
  confirm_code: { phoneNumber: string }
}

const Stack = createStackNavigator<StackParamList>()

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
      <Stack.Screen
        options={{ headerShown: false }}
        component={ConfirmCode_Page}
        name="confirm_code"
      />
    </Stack.Navigator>
  )
}

export default AuthRoutes
