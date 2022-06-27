import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width

const InfoScreen4 = () => {
    return (
        <View >
            <View style={styles.textView} >
                <View >
                    <Image resizeMode='contain' style={styles.imageStyles} source={require('../../assets/infoScreen4.png')} />
                </View>
                <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: width * 0.05, color: 'black', paddingVertical: 15 }} >How to effectively monitor</Text>
                    <Text style={{ fontSize: width * 0.03, color: 'grey' }} >Check your hydration report and see your ratio</Text>
                </View>
            </View>
        </View>
    )
}

export default InfoScreen4

const styles = StyleSheet.create({
    textView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyles: {
        height: height * 0.4,
        width: width
    },
})