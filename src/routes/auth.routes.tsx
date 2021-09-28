import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/Login';

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        component={LoginPage}
        name="login"
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
