import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactsPage from '../pages/Contacts'
import SettingsPage from '../pages/Settings'
import { ThemeContext } from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack'
import ChatPage from '../pages/Chat'
import { Contact } from '../utils/interfaces'

export type StackParamList = {
  bottom_tabs: undefined
  chat: Contact
}

const BottomTabs = createBottomTabNavigator()
const Stack = createStackNavigator<StackParamList>()

const BottomTabsRoutes: React.FC = () => {
  const { secundaryColor, primaryColor, sizes } = useContext(ThemeContext)

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: primaryColor },
        headerTitleStyle: { color: '#fff' },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: primaryColor,
        },
      }}>
      <BottomTabs.Screen
        options={{
          headerTitle: 'Suas conversas',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
              size={sizes.one * 7}
              color={secundaryColor}
            />
          ),
        }}
        component={ContactsPage}
        name={'contacts'}
      />
      <BottomTabs.Screen
        options={{
          headerTitle: 'Configurações',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'settings' : 'settings-outline'}
              size={sizes.one * 7}
              color={secundaryColor}
            />
          ),
        }}
        component={SettingsPage}
        name={'settings'}
      />
    </BottomTabs.Navigator>
  )
}

const AppRoutes: React.FC = () => {
  const { secundaryColor, primaryColor, sizes } = useContext(ThemeContext)
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: 'transparentModal',
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={BottomTabsRoutes}
        name="bottom_tabs"
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: primaryColor,
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerBackImage: () => (
            <Ionicons
              name={'chevron-back'}
              size={sizes.one * 7}
              color={secundaryColor}
            />
          ),
        }}
        component={ChatPage}
        name={'chat'}
      />
    </Stack.Navigator>
  )
}

export default AppRoutes
