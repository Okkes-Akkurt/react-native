// Header.js
import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const Header = ({ headerColor }) => {
	return (
		<View
			style={{
				height: 50,
				backgroundColor: headerColor,
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Text>HEADER</Text>
		</View>
	);
};

const mapStateToProps = (state) => ({
	headerColor: state.headerColor,
});

export default connect(mapStateToProps)(Header);
