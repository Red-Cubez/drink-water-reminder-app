import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressView from '../../components/startScreenComponents/ProgressView'
import ButtonNavigation from '../../components/startScreenComponents/BottomNavigation'
import Constants from '../../config/Constants'
import SelectGender from './SelectGender'
import SelectWeight from './SelectWeight';

const height = Constants.height
const width = Constants.width

const Screen2 = ({ navigation }) => {
    const [gender, setGender] = useState(true)
    const [weight, setWeight] = useState(gender ? '70' : '60')
    const [steps, setSteps] = useState(1)
    console.log(steps);
    return (
        <View style={styles.container} >
            <View style={styles.progressView} >
                <ProgressView />
            </View>
            <View style={styles.centerView} >
                {steps === 1 ? (
                    <SelectGender genderSelect={{ gender, setGender }} />
                ) : steps === 2 ? (
                    <SelectWeight weightSelect={{ weight, setWeight }} />
                ) : (
                    <></>
                )}
            </View>
            <View style={styles.bottomView} >
                <ButtonNavigation navigation={navigation} stage={{ steps, setSteps }} />
            </View>
        </View >
    )
}

export default Screen2

const styles = StyleSheet.create({
    container: {
        height: height * 0.9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressView: {
        height: height * 0.15,
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerView: {
        height: height * 0.6,
        width: width,
        alignItems: 'center',
    },
    characterView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomView: {
        height: height * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
})