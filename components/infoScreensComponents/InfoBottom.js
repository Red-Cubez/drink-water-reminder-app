import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'

const InfoBottom = ({ steps }) => {
    const { infoSteps, setInfoSteps } = steps
    return (
        <View style={styles.container} >
            <Text onPress={() => setInfoSteps(infoSteps + 1)} style={styles.textStyles}>NEXT></Text>
            <Text style={styles.textStyles} >{infoSteps}/4</Text>
        </View>
    )
}

export default InfoBottom

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    textStyles: {
        color: 'black',
        paddingBottom: 3
    },
})