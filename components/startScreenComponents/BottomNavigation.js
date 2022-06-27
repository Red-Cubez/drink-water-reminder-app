import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width
const colors = Constants.colors

const BottomNavigation = ({ navigation, stage }) => {
    const { steps, setSteps } = stage
    return (
        <View style={styles.container} >
            <View style={styles.navigationButtons} >
                <TouchableHighlight
                    onPress={() => { steps != 1 ? setSteps(steps - 1) : navigation.goBack() }}
                    style={[styles.buttonStyles, { height: width * 0.12, width: width * 0.12, borderRadius: width * 0.06 }]}
                >
                    <MaterialIcons name="keyboard-arrow-left" size={width * 0.08} color="white" />
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => setSteps(steps + 1)}
                    style={[styles.buttonStyles, { padding: 10, borderRadius: 20, width: width * 0.2 }]}
                >
                    <Text style={styles.textStyles} >NEXT</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
    },
    navigationButtons: {
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
    },
    buttonStyles: {
        backgroundColor: colors.buttonPrimary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyles: {
        color: 'white',
        fontSize: width * 0.05
    },
})