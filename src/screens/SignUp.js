'use strict';

import React, { Component } from 'react';

import {
    AppRegistry,
    Text,
    TextInput,
    View,
    AsyncStorage,
    StyleSheet,
    Image
} from 'react-native';

var firebase = require("firebase");

export const rootRef = firebase.database();
export const authRef = firebase.auth();

var Home = require('./Home');
var Button = require('../components/Button');
var Header = require('../components/Header');
var styles = require('../styles/common-styles');
var AppConfig = require('../config/AppConfig');

class SingUp extends Component {

	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: '',
            confirmPw: ''
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
        var self = this;

        if (this.state.password !== this.state.confirmPw) {
            alert("Passwords don't match!");
            return false;
        }

        authRef.createUserWithEmailAndPassword(this.state.email, this.state.password).then(function(new_user) {
            console.log(new_user);
            AsyncStorage.setItem('user_data', JSON.stringify(new_user));
            self.props.navigator.push({
                component: Home
            });
        }, function(error) {
            var errorMessage = error.message;

            alert(errorMessage);
        });
    }

    render() {
        return (
            <View style={localStyles.container}>
                <View style={localStyles.header}>
                    <Text style={localStyles.signUpTitle}>Sing Up</Text>
                </View>
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
                    <View style={styles.inputContainer}>
                        <Image style={styles.inputPassword} source={require('../images/icons/pw.png')}/>
                        <TextInput
                            style={[styles.input]}
                            onChangeText={(text) => this.setState({confirmPw: text})}
                            value={this.state.confirmPw}
                            placeholder="Confirm Password"
                            secureTextEntry={true} />
                    </View>
                </View>

                <Button 
                    text="Sign Up" 
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
    header: {
        alignItems: "center",
        marginTop: 30,
    },
    signUpTitle: {
        fontSize: 18
    }
});

module.exports = SingUp;