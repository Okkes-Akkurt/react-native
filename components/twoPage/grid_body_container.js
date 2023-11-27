import { StyleSheet } from 'react-native';

const grid_body_container = StyleSheet.create({
	container: {
		flexDirection: 'row',
		width: '100%',
		height: '100%' - 100 ,
	},

	body: {
		width: '100%',
		backgroundColor: 'pink',
		alignItems: 'center',
		paddingTop: 50,
		paddingBottom: 50,
	},

	innerBody: {
		width: Platform.OS !== 'ios' && Platform.OS !== 'android' ? '80%' : '90%',
		justifyContent: 'center',
		flexDirection: 'row',
		gap: 30,
		height: '100%',
		borderStyle: 'dotted',
		borderWidth: 1,
	},

	title: {
		backgroundColor: 'blue',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
	},

	inputs: {
		height: 70,
		backgroundColor: '#fff',
		borderWidth: 1,
		padding: 15,
		fontSize: 20,
	},

	inputContainer: {
		rowGap: 10,
		marginTop: 10,
	},

	sidebar: {
		flex: 1,
		backgroundColor: 'aqua',
		alignItems: 'center',
		justifyContent: 'center',
	},

	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	button: {
		width: '48%',
		height: 100,
	},
	left: {
		flex: 1,
		gap: 10,
	},
	right: {
		flex: 3,
	},
});

export default grid_body_container;
