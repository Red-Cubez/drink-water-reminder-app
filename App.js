import React, { useState } from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';


import NetInfo from '@react-native-community/netinfo';
import Constants from './config/Constants'
import Dashboard from './screens/Dashboard';
import AdMob from './components/Admob';


const height = Constants.height
const width = Constants.width

const App = () => {
	const [connected, setConnected] = useState(false)
	NetInfo.fetch().then(state => setConnected(state.isConnected))

	return (
		<View style={styles.container}>
			<View style={{ height: connected ? height * 0.9 : height, width: width, justifyContent: 'center', alignItems: 'center' }} >
				<Dashboard />
			</View>
			{
				connected ? (
					<View style={{ height: height * 0.1, justifyContent: 'center', alignItems: 'center' }} >
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
