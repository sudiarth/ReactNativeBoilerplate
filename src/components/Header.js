'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	TextInput,
	Image,
	StyleSheet
} from 'react-native';

class Header extends Component {
	render() {
		return (
			// CHANGME - Change you the image with your logo
			<View style={styles.header}>
				<Image source={require('../images/changeme_logo.png')} />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	header: {
		alignItems: "center",
		marginTop: 30,
	},
});

module.exports = Header;