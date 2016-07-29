'use-strict';

import React, { Component } from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

var AppStyles = require('../styles/AppStyles');

var Button = React.createClass({
	onPress: function() {
		if(this.props.onPress) this.props.onPress();
	},

	render: function() {
		return (
			<TouchableOpacity
				style={[AppStyles.formButton, this.props.buttonStyles]}
				onPress={this.props.onPress}
				activeOpacity={0.7} >
				<Text style={this.props.buttonTextStyles}>{this.props.text ? this.props.text : 'Click Here'}</Text>
			</TouchableOpacity>
		);
	}
});

module.exports = Button;