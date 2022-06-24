import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreensNavigator from './navigation/StartScreensNavigator';
import NetInfo from '@react-native-community/netinfo';
import Constants from './config/Constants'
import Dashboard from './screens/Dashboard';
import AdMob from './components/AdMob';

const height = Constants.height
const width = Constants.width

const Stack = createNativeStackNavigator()

const App = () => {
	const [connected, setConnected] = useState(false)
	NetInfo.fetch().then(state => setConnected(state.isConnected))

	return (
		<View style={styles.container}>
			<View style={{ height: connected ? height * 0.9 : height, width: width }} >
				<NavigationContainer >
					<StartScreensNavigator />
				</NavigationContainer>
			</View>
			{
				connected ? (
					<View style={{ height: height * 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue' }} >
						<AdMob />
					</View>
				) : (
					<></>
				)
			}
			<StatusBar hidden />
		</View>
	);
}

export default App;

const styles = StyleSheet.create({
	container: {
		height: height,
		width: width,
	},
});
