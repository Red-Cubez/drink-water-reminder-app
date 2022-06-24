import { Dimensions, StatusBar } from 'react-native'

let { height, width } = Dimensions.get('window')

const colors = {
    primary: 'black',
    buttonPrimary: '#4e8aed'
}

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;

export default { height, width, colors }