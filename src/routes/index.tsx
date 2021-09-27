import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Stack = createStackNavigator()
const BottomTabs = createBottomTabNavigator()

export const NotSignedRoutes: React.FC = () => {
    return (
        <NavigationContainer>
			<Stack.Navigator>
				
			</Stack.Navigator>
        </NavigationContainer>
    )
}

export const SignedRoutes: React.FC = () => {
	return (
		<NavigationContainer>
			<BottomTabs.Navigator>
				
			</BottomTabs.Navigator>
		</NavigationContainer>
	)
}