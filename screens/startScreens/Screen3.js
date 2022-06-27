import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProgressView from '../../components/startScreenComponents/ProgressView'
import ButtonNavigation from '../../components/startScreenComponents/BottomNavigation'
import Constants from '../../config/Constants'
import InfoHeader from '../../components/infoScreensComponents/InfoHeader';
import InfoBottom from './../../components/infoScreensComponents/InfoBottom';
import InfoScreen1 from './../infoScreens/InfoScreen1';
import InfoScreen2 from './../infoScreens/infoScreen2';
import InfoScreen3 from '../infoScreens/InfoScreen3'
import InfoScreen4 from '../infoScreens/infoScreen4'

const height = Constants.height
const width = Constants.width
const colors = Constants.colors

const Screen3 = ({ navigation }) => {
    const [infoSteps, setInfoSteps] = useState(1)
    return (
        <View style={styles.container} >
            <View style={styles.progressView} >
                <InfoHeader />
            </View>
            <View style={styles.centerView} >
                {infoSteps === 1 ? (
                    <InfoScreen1 />
                ) : infoSteps === 2 ? (
                    <InfoScreen2 />
                ) : infoSteps === 3 ? (
                    <InfoScreen3 />
                ) : infoSteps === 4 ? (
                    <InfoScreen4 />
                ) : (
                    <></>
                )}
            </View>
            <View style={styles.bottomView} >
                <InfoBottom steps={{ infoSteps, setInfoSteps }} />
            </View>
        </View >
    )
}

export default Screen3

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundGrey
    },
    progressView: {
        height: '15%',
        width: width,
    },
    centerView: {
        height: '70%',
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
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