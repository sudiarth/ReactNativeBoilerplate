'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	StyleSheet,
	AsyncStorage,
	Navigator
} from 'react-native';

var Button = require('../components/Button');
var Index = require('../../index.ios');

class Home extends Component {

	logout() {
		AsyncStorage.removeItem('user_data');

		this.props.navigator.push({
			component: Index
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome USERNAME_HERE!
				</Text>
				<Button 
				    text="Logout" 
				    onPress={this.logout.bind(this)} />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});

module.exports = Home;