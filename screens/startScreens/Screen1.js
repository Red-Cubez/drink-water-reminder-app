import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width
const colors = Constants.colors

const Screen1 = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.headingText} >
                Hi, {'\n'}
                I'm your personal hydration companion
            </Text>
            <Text style={styles.bodyText} >
                In order to provide tailored hydrtion advice, I need to get some basic information. And I'll keep this a secret.
            </Text>
            <View style={styles.buttonView} >
                <TouchableHighlight style={styles.buttonStyles} onPress={() => { navigation.navigate('Screen2') }} >
                    <Text style={styles.buttonText} >
                        LET'S GO
                    </Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        color: 'black',
        fontWeight: '500',
        fontSize: width * 0.07
    },
    bodyText: {
        color: 'grey',
        fontSize: width * 0.038,
        paddingTop: 20
    },
    buttonView: {
        bottom: height * 0.05,
        position: 'absolute'
    },
    buttonStyles: {
        backgroundColor: colors.buttonPrimary,
        borderRadius: 20,
        width: width * 0.8
    },
    buttonText: {
        color: 'white',
        padding: 10,
        fontSize: width * 0.05,
        textAlign: 'center'
    },
})