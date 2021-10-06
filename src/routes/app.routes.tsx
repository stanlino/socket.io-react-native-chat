import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactsPage from '../pages/Contacts'
import SettingsPage from '../pages/Settings'
import { ThemeContext } from 'styled-components/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const BottomTabs = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  const { colors, sizes } = useContext(ThemeContext)

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.Secundary },
        headerTitleStyle: { color: colors.Primary },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.Secundary,
        },
      }}>
      <BottomTabs.Screen
        options={{
          headerTitle: 'Suas conversas',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
              size={sizes.one * 7}
              color={colors.Primary}
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
              color={colors.Primary}
            />
          ),
        }}
        component={SettingsPage}
        name={'settings'}
      />
    </BottomTabs.Navigator>
  )
}

export default AppRoutes
