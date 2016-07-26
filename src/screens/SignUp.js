'use strict';

import React, { Component } from 'react';

import {
    AppRegistry,
    Text,
    TextInput,
    View,
    AsyncStorage
} from 'react-native';

var firebase = require("firebase");

export const rootRef = firebase.database();
export const authRef = firebase.auth();

var Home = require('./Home');
var Button = require('../components/Button');
var styles = require('../styles/common-styles');

class SingUp extends Component {

	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

    goToLogin() {
        var Login = require('./Login');
        console.log(this.props.navigator.getCurrentRoutes());

        this.props.navigator.resetTo({
            component: Login
        });
    }

    sigUp() {
        var that = this;

        authRef.createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(new_user) {
            console.log(new_user);
            AsyncStorage.setItem('user_data', JSON.stringify(new_user));
            that.props.navigator.push({
                component: Home
            });
        }, function(error) {
            var errorMessage = error.message;

            alert(errorMessage);
        });
    }

    render() {
        return (
            <View style={styles.container}>
      		    <TextInput
                    style={styles.textinput}
        		    onChangeText={(text) => this.setState({email: text})}
        		    value={this.state.email}
                    placeholder={"Email Address"} />
                <TextInput
                    style={styles.textinput}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                    secureTextEntry={true}
                    placeholder={"Password"}/>

                <Button 
                    text="   Sign Up   " 
                    onPress={this.sigUp.bind(this)}
                    buttonStyles={styles.primaryButton}
                    buttonTextStyles={styles.primaryButtonText} />
                <Button 
                    text="Got an Account?" 
                    onPress={this.goToLogin.bind(this)}
                    buttonStyles={styles.primaryButton}
                    buttonTextStyles={styles.primaryButtonText} />
            </View>
        );
    }
}

module.exports = SingUp;