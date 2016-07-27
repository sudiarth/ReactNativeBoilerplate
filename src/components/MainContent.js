'use strict';

import React, { Component } from 'react';
import {
	Text,
	View,
	Navigator,
	AsyncStorage,
	ActivityIndicator,
	TextInput,
	ScrollView
} from 'react-native';

var styles = require('../styles/common-styles');

var Button = require('./Button');
var HomeOrLogin = require('../screens/HomeOrLogin');

class MainContent extends Component {

	// updateProfile() {
	// 	var user = authRef.currentUser;
	// 	// Updating user profile example in firebase
	// 	user.updateProfile({
	// 		displayName: this.state.displayName
	// 	}).then(function() {
	// 		// Update successful
	// 		alert("Updated");
	// 	}, function(error) {
	// 		// An error occurred
	// 		alert("Oops, we weren't able to update your profile.");
	// 	});
	// }


	render() {
		return (
			<ScrollView automaticallyAdjustContentInsets={false}>
				<View style={styles.container}>
					<Text style={styles.welcome}>
						Welcome User
						You're currently logged in.  
					</Text>
				</View>
			</ScrollView>
		)
	}
}

module.exports = MainContent;