import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const Footer = ({ footerColor }) => {
  return (
    <View
      style={{
        height: 50,
        backgroundColor: footerColor,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>FOOTER</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  footerColor: state.footerColor,
});

export default connect(mapStateToProps)(Footer);