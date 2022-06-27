import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width

const InfoScreen1 = () => {
    return (
        <View >
            <View style={styles.textView} >
                <Text style={{ fontSize: width * 0.05, color: 'black' }} >Your Proper Daily Water Intake</Text>
                <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                    <Text style={{ fontSize: 30, color: 'black' }}>2210</Text>
                    <Text style={{ fontSize: 10, color: 'black' }}>ml</Text>
                </View>
            </View>
        </View>
    )
}

export default InfoScreen1

const styles = StyleSheet.create({
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})