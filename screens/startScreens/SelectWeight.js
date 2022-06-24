import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'


import ScrollPicker from 'react-native-wheel-scrollview-picker';


import Constants from '../../config/Constants'

const height = Constants.height
const width = Constants.width

const SelectWeight = ({ weightSelect }) => {
    const { weight, setWeight } = weightSelect
    return (
        <View style={styles.container} >
            <View style={{ height: height * 0.1 }} >
                <Text style={styles.headingText} >
                    Your Weight
                </Text>
            </View>
            <View style={{ flexDirection: 'row', height: height * 0.5, width: width }} >
                <Image style={styles.imageStyles} source={require('../../assets/boy-weight.png')} />
                <View style={styles.weightView} >
                    <View style={styles.weightInner} >
                        <ScrollPicker
                            dataSource={['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6']}
                            selectedIndex={0}
                            renderItem={(data, index) => {
                                return (
                                    <Text style={{ color: 'blue', }} >{data}</Text>
                                )
                            }}
                            onValueChange={(data, selectedIndex) => {
                                console.log(data);
                            }}
                            wrapperHeight={120}
                            wrapperWidth={100}
                            wrapperColor='transparent'
                            itemHeight={50}
                            highlightColor='#d8d8d8'
                            highlightBorderWidth={2}
                        />
                    </View>
                    <View style={styles.weightInner} >
                        <ScrollPicker
                            dataSource={['1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6', '1', '2', '3', '4', '5', '6']}
                            selectedIndex={5}
                            renderItem={(data, index) => {
                                return (
                                    <Text style={{ color: 'blue' }} >{data}</Text>
                                )
                            }}
                            onValueChange={(data, selectedIndex) => {
                                console.log(data);
                            }}
                            wrapperHeight={120}
                            wrapperWidth={100}
                            wrapperColor='transparent'
                            itemHeight={50}
                            highlightColor='#d8d8d8'
                            highlightBorderWidth={2}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default SelectWeight

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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    weightInner: {
        height: height * 0.2,
        width: width * 0.2,
        padding: 10
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'green'
    },
})




// import React, { Component } from 'react';
// import { Text, View } from 'react-native';
// import ScrollPicker from 'react-native-wheel-scrollview-picker';

// import Constants from '../../config/Constants'

// const height = Constants.height
// const width = Constants.width

// export default class SimpleExample extends Component {
//     render() {
//         return (
//             <View style={{ backgroundColor: 'orange' }}>
//                 <Text>Hello</Text>
//                 <ScrollPicker

//                     dataSource={['1', '2', '3', '4', '5', '6']}
//                     selectedIndex={0}
//                     renderItem={(data, index) => {
//                         return (
//                             <Text>{data}</Text>
//                         )
//                     }}
//                     onValueChange={(data, selectedIndex) => {
//                         //
//                     }}
//                     wrapperHeight={height * 0.5}
//                     wrapperWidth={width}
//                     wrapperColor='grey'
//                     itemHeight={100}
//                     highlightColor='#d8d8d8'
//                     highlightBorderWidth={2}
//                 />
//             </View>
//         );
//     }
// }
