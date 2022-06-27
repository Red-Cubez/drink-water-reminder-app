import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width

const InfoScreen2 = () => {
    return (
        <View >
            <View style={styles.textView} >
                <View >
                    <Image resizeMode='contain' style={styles.imageStyles} source={require('../../assets/infoScreen2.png')} />
                </View>
                <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: width * 0.05, color: 'black', paddingVertical: 15 }} >How much should you drink</Text>
                    <Text style={{ fontSize: width * 0.03, color: 'grey' }} >11 times a day</Text>
                    <Text style={{ fontSize: width * 0.03, color: 'grey' }} >201 ml each time</Text>
                </View>
            </View>
        </View>
    )
}

export default InfoScreen2

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