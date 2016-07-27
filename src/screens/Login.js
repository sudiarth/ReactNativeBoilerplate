'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	TextInput,
	Image,
	AsyncStorage,
	Navigator,
	StyleSheet
} from 'react-native';

var styles = require('../styles/common-styles');
var Header = require('../components/Header');
var Button = require('../components/Button');
var Home = require('../screens/Home');
var AppConfig = require('../config/AppConfig');

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

		var self = this;

		authRef.signInWithEmailAndPassword(this.state.email, this.state.password).then(function(user_data) {
			// console.log("user id:" + user_data.uid);
			AsyncStorage.setItem('user_data', JSON.stringify(user_data));
			self.props.navigator.push({
				component: Home
			});
		}, function(error) {
			var errorCode = error.code;
			var errorMessage = error.message;

			if(errorCode == 'auth/wrong-password' || errorCode == 'auth/invalid-email') {
				alert('Wrong email and/or password');
			} else {
				alert(errorMessage);
			}
		});
	}

	goToSignUp() {
		// Lazy load signup page
		var SingUp = require('./SignUp');
		
		this.props.navigator.push({
			component: SingUp
		});
	}

	render() {
		return (
			<View style={localStyles.container}>
				<Header style={styles.header} />
				<View style={styles.inputs}>
					<View style={styles.inputContainer}>
						<Image style={styles.inputUsername} source={require('../images/icons/user_name.png')}/>
						<TextInput 
							style={[styles.input]}
							onChangeText={(text) => this.setState({email: text})}
							value={this.state.email}
							placeholder="Email Address"
							 />
					</View>
					<View style={styles.inputContainer}>
		                <Image style={styles.inputPassword} source={require('../images/icons/pw.png')}/>
						<TextInput
							style={[styles.input]}
							onChangeText={(text) => this.setState({password: text})}
							value={this.state.password}
							placeholder="Password"
							secureTextEntry={true} />
					</View>
				</View>
				<Button 
				    text="Login" 
				    onPress={this.login.bind(this)}
				    buttonStyles={styles.primaryButton}
				    buttonTextStyles={styles.primaryButtonText} />
				<Button 
                    text="New User?" 
                    onPress={this.goToSignUp.bind(this)}
                    buttonStyles={styles.primaryButton}
				    buttonTextStyles={styles.primaryButtonText}  />
				
			</View>
		);
	}
}

var localStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: AppConfig.appBgColor,
	},
	bg: {
		position: 'absolute',
		left: 0,
		top: 0,
		width: AppConfig.windowWidth,
		height: AppConfig.windowHeight
	},
});

module.exports = Login;