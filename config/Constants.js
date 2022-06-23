import { Dimensions, StatusBar } from 'react-native'

let { height, width } = Dimensions.get('window')

const colors = {
    primary: 'black'
}

const screenHeight = Dimensions.get('screen').height;
const windowHeight = Dimensions.get('window').height;

export default { height, width, colors }