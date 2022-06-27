import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, FlatList } from 'react-native'

import DatePicker from 'react-native-date-picker'

import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width
const colors = Constants.colors

const SelectWakeupTime = ({ weightSelect, genderSelect }) => {
    const { weight, setWeight } = weightSelect
    const { gender, setGender } = genderSelect
    const [unit, setUnit] = useState('kg')

    const [date, setDate] = useState(new Date())

    return (
        <View style={styles.container} >
            <View style={{ height: height * 0.1 }} >
                <Text style={styles.headingText} >
                    Wake-up time
                </Text>
            </View>
            <View style={{ flexDirection: 'row', height: height * 0.5, width: width }} >
                <Image style={styles.imageStyles} source={require('../../assets/boy-weight.png')} />
                <View style={styles.weightView} >
                    <DatePicker
                        style={{ backgroundColor: 'transparent', height: height * 0.2, width: width * 0.4 }}
                        mode='time'
                        textColor={colors.buttonPrimary}
                        fadeToColor='none'
                        is24hourSource='locale'
                        date={date}
                        onDateChange={(time) => {
                            console.log(time)
                        }}
                        onConfirm={(date) => {
                            console.log(date)
                            setDate(date)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default SelectWakeupTime

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
        height: '100%',
        width: width * 0.4,
    },
    weightView: {
        height: height * 0.5,
        width: width * 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

