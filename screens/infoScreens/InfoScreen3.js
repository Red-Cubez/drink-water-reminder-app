import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width

const InfoScreen3 = () => {
    return (
        <View >
            <View style={styles.textView} >
                <View >
                    <Image resizeMode='contain' style={styles.imageStyles} source={require('../../assets/infoScreen3.png')} />
                </View>
                <View style={{ paddingVertical: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: width * 0.06, color: 'black', paddingVertical: 15 }} >What is the right time</Text>
                    <Text style={{ fontSize: width * 0.03, color: 'grey' }} >Don't worry, we'll remind you on time</Text>
                </View>
            </View>
        </View>
    )
}

export default InfoScreen3

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