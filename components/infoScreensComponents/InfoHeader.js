import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const InfoHeader = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.skipText} >Skip</Text>
            <View style={styles.heading} >
                <Image source={require('../../assets/boy-avatar.png')} style={styles.imageStyles} />
                <Text style={{ paddingHorizontal: 10, color: 'black' }}>Personal Hydration Plan</Text>
            </View>
        </View>
    )
}

export default InfoHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        height: '100%'
    },
    skipText: {
        textAlign: 'right',
        color: 'grey',
        padding: 10,
    },
    heading: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    imageStyles: {
        height: 30,
        width: 30
    },

})