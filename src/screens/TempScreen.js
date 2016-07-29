'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

var AppStyles = require('../styles/AppStyles');

class TempScreen extends Component {
	navigate(navbar_title) {
		this.props.navigator.push({
			title: navbar_title, 
			component: ComingSoon, 
			index: 2
		});
	}

	render() {
		var placeholderText = this.props.placeholder;
		
		if(!placeholderText) { placeholderText = 'Coming soon...'; }

		// Done
		return (
			<View style={[AppStyles.container, AppStyles.containerCentered]}>
				<Text style={[AppStyles.baseText, AppStyles.p]}>
					{placeholderText}
				</Text>
			</View>
		);
	}

}

module.exports = TempScreen;