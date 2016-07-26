import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	AsyncStorage,
	Navigator,
} from 'react-native';

var HomeOrLogin = require('./src/screens/HomeOrLogin');

// CHANGEME - Change the class name here to your project class name - be sure to do a Replace All
class ReactNativeBoilerplate extends Component {
	render() {
		return ( <HomeOrLogin /> )
	}
}

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
