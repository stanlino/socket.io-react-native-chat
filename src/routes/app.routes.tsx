import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ContactsPage from '../pages/Contacts'
import SettingsPage from '../pages/Settings'

const BottomTabs = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
  return (
    <BottomTabs.Navigator screenOptions={{ headerShown: false }}>
      <BottomTabs.Screen component={ContactsPage} name={'contacts'} />
      <BottomTabs.Screen component={SettingsPage} name={'settings'} />
    </BottomTabs.Navigator>
  )
}

export default AppRoutes
