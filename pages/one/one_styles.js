import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const one_styles = StyleSheet.create({
    container: {
        height: windowHeight - 100,
        width: windowWidth,
        alignItems:'center'
	},
});

export default one_styles;
