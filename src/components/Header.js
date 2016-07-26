'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	TextInput,
	Image
} from 'react-native';

class Header extends Component {
	render() {
		return (
			// CHANGME - Change you the image with your logo
			<Image source={require('../images/changeme.jpg')} />
		);
	}
}

module.exports = Header;