'use-strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

var styles = require('../styles/common-styles');

var Button = React.createClass({
	onPress: function() {
		if(this.props.onPress) this.props.onPress();
	},

	render: function() {
		return (
			<TouchableOpacity
				style={[styles.formButton, this.props.style == 'outlined' ? styles.formButtonOutline : null]}
				onPress={this.props.onPress}
				activeOpacity={0.7} >
				<Text style={[styles.primary_button_text]}>{this.props.text ? this.props.text : 'Click Here'}</Text>
			</TouchableOpacity>
		);
	}
});

/* ==============================
Styles
=============================== */
var styles = StyleSheet.create({
	// Standard
	formButton: {
		backgroundColor: '#4099FF',
		height: 50,
		justifyContent: 'center',
		borderRadius: 3,
		marginBottom: 10,
		paddingHorizontal: 10,
	},
	formButton_text: {
		color: "#FFF",
		textAlign: 'center',
		fontSize: 15,
		fontFamily: 'Avenir',
		fontWeight: '800',
	},

	// Outlined
	formButtonOutline: {
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: '#4099FF',
	},
	formButtonOutline_text: {
		color: '#4099FF',
	},
});

module.exports = Button;