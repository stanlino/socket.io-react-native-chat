import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactsPage from '../pages/Contacts'
import SettingsPage from '../pages/Settings'
import { ThemeContext } from 'styled-components/native'

const BottomTabs = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.Secundary },
        headerTitleStyle: { color: colors.Primary },
      }}>
      <BottomTabs.Screen
        options={{ headerTitle: 'Contatos' }}
        component={ContactsPage}
        name={'contacts'}
      />
      <BottomTabs.Screen
        options={{ headerTitle: 'Configurações' }}
        component={SettingsPage}
        name={'settings'}
      />
    </BottomTabs.Navigator>
  )
}

export default AppRoutes
