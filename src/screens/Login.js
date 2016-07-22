'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	TextInput,
	Image,
	AsyncStorage,
	Navigator
} from 'react-native';

var styles = require('../styles/common-styles');
var Header = require('../components/Header');
var Button = require('../components/Button');
var Home = require('../screens/Home');
var Index = require('../../index.ios');

var firebase = require("firebase");
// Initialize Firebase
var FIREBASE_CONFIG = {
	apiKey: "AIzaSyAA_Oyg7qciFv1WZbJe7iFFXwvMMrZoazw",
	authDomain: "reactnativeboilerplate.firebaseapp.com",
	databaseURL: "https://reactnativeboilerplate.firebaseio.com",
	storageBucket: "reactnativeboilerplate.appspot.com",
};

firebase.initializeApp(FIREBASE_CONFIG);

export const rootRef = firebase.database();
export const authRef = firebase.auth();

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
		this.setState({
			loaded: false
		});

		authRef.signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user_data) {
			console.log("user id:" + user_data.uid);
			AsyncStorage.setItem('user_data', JSON.stringify(user_data));
		}, function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

			if(errorCode == 'auth/wrong-password' || errorCode == 'auth/invalid-email') {
				alert('Wrong email and/or password');
			} else {
				alert(errorMessage);
			}
		});

		this.props.navigator.push({
			component: Home
		})
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
				    onPress={this.login.bind(this)} />
				
			</View>
		);
	}

	
}

module.exports = Login;