import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomePage from '../pages/Home'
import SettingsPage from '../pages/Settings'

const BottomTabs = createBottomTabNavigator()

const AppRoutes: React.FC = () => {
	return (
		<BottomTabs.Navigator>
			<BottomTabs.Screen component={HomePage} name={"home"} />
			<BottomTabs.Screen component={SettingsPage} name={"settings"} />
		</BottomTabs.Navigator>
	)
}

export default AppRoutes