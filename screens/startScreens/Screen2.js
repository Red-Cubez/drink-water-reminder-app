import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressView from '../../components/startScreenComponents/ProgressView'
import ButtonNavigation from '../../components/startScreenComponents/BottomNavigation'
import Constants from '../../config/Constants'
import SelectGender from './SelectGender'
import SelectWeight from './SelectWeight';
import SelectWakeupTime from './SelectWakeupTime';
import SelectBedTime from './SelectBedTime';

const height = Constants.height
const width = Constants.width

const Screen2 = ({ navigation }) => {
    const [gender, setGender] = useState(true)
    const [weight, setWeight] = useState(gender ? '70' : '60')
    const [steps, setSteps] = useState(1)
    return (
        <View style={styles.container} >
            <View style={styles.progressView} >
                <ProgressView />
            </View>
            <View style={styles.centerView} >
                {steps === 1 ? (
                    <SelectGender genderSelect={{ gender, setGender }} />
                ) : steps === 2 ? (
                    <SelectWeight weightSelect={{ weight, setWeight }} genderSelect={{ gender, setGender }} />
                ) : steps === 3 ? (
                    <SelectWakeupTime weightSelect={{ weight, setWeight }} genderSelect={{ gender, setGender }} />
                ) : steps === 4 ? (
                    <SelectBedTime weightSelect={{ weight, setWeight }} genderSelect={{ gender, setGender }} />
                ) : (
                    <>{navigation.navigate('Screen3')}</>
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
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    progressView: {
        height: '15%',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerView: {
        height: '70%',
        width: width,
        alignItems: 'center',
    },
    characterView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomView: {
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
    },
})