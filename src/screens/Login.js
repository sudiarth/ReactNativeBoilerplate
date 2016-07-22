'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	TextInput,
	Image
} from 'react-native';

var styles = require('../styles/common-styles');
var Header = require('../components/Header');
var Button = require('../components/Button');

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: true,
			email: '',
			password: ''
		};
	}

	login() {
		alert('Logged in');
	}

	render() {
		return (
			<View>
				<Header />
				<TextInput 
					style={styles.textinput}
					onChangeText={(text) => this.setState({email: text})}
					value={this.state.email}
					placeholder={"Email Address"} />

				<TextInput
					style={styles.textinput}
					onChangeText={(text) => this.setState({password: text})}
					value={this.state.password}
					placeholder={"Password"}
					secureTextEntry={true} />
				<Button 
				    text="Login" 
				    pressed={this.login.bind(this)}
				    button_styles={styles.transparent_button} 
            		button_text_styles={styles.transparent_button_text} />
				
			</View>
		);
	}

	
}

module.exports = Login;