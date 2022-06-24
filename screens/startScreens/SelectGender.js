import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'

import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width

const SelectGender = ({ genderSelect }) => {
    const { gender, setGender } = genderSelect
    return (
        <View style={styles.container} >
            <View style={{ height: height * 0.1 }} >
                <Text style={styles.headingText} >
                    Your Gender
                </Text>
            </View>
            <View style={{ flexDirection: 'row', height: height * 0.5 }} >
                <View style={{ justifyContent: 'center', opacity: gender ? 1 : 0.5 }} >
                    <TouchableHighlight underlayColor={'none'} style={styles.buttonContainer} onPress={() => setGender(true)}>
                        <>
                            <Image style={styles.imageStyles} source={require('../../assets/boy-avatar.png')} />
                            <Text style={{ color: gender ? 'blue' : 'grey' }} >Male</Text>
                        </>
                    </TouchableHighlight>
                </View>
                <View style={{ justifyContent: 'center', opacity: !gender ? 1 : 0.5 }} >
                    <TouchableHighlight underlayColor={'none'} style={styles.buttonContainer} onPress={() => setGender(false)}>
                        <>
                            <Image style={styles.imageStyles} source={require('../../assets/girl-avatar.png')} />
                            <Text style={{ color: !gender ? 'blue' : 'grey' }} >Female</Text>
                        </>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
}

export default SelectGender

const styles = StyleSheet.create({
    container: {
        height: height * 0.6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headingText: {
        color: 'black',
        fontWeight: '500',
        fontSize: width * 0.06
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyles: {
        height: width * 0.4,
        width: width * 0.4
    },
})