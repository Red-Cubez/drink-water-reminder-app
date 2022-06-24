import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Constants from '../config/Constants'
import Screen1 from './startScreens/Screen1'
import Screen2 from './startScreens/Screen2'

const height = Constants.height
const width = Constants.width

const Dashboard = () => {
    return (
        <View style={styles.container} >
            <Screen1 />
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
})