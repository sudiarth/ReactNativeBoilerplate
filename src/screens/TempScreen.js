'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

var AppStyles = require('../styles/common-styles');

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

				<View style={[AppStyles.spacer_10]} />

				<Button
					text={'Tap to test the back button'}
					style={'outlined'}
					onPress={()=>this.navigate(placeholderText).bind(this)} />
			</View>
		);
	}

}

module.exports = TempScreen;