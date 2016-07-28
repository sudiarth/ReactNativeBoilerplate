/**
 *	Forms page example
 */
'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

// 3rd party components - Form Components
var FormValidation = require('tcomb-form-native');
var Form = FormValidation.form.Form;

var Button = require('../components/Button');
var AppStyles = require('../styles/AppStyles');
var AppConfig = require('../config/AppConfig');

import {
	rootRef,
	authRef
} from './Login';

class UpdateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentDisplayName: null,
			userEmail: null,
			formFields: FormValidation.struct({
				displayName: FormValidation.String // Required
			}),
			formValues: {},
			options: {
				displayName: { error: 'Cannot be empty' },
			},
		};
	}

	update() {
		var user = authRef.currentUser;
		var values = this.refs.form.getValue();
		var self = this;

		// Updating user profile example in firebase
		if (user) {
			if (values != null) {
				user.updateProfile({
					displayName: values.displayName
				}).then(function() {
					// Update successful
					alert("Profile Updated!");
					self.setState({
						currentDisplayName: values.displayName,
					});
					// TODO : Might want to update AsyncStorage.setItem('user_data')
				}, function(error) {
					// An error occurred
					alert("Oops, we weren't able to update your profile.");
				});
			} else {
				alert("You gotta enter something!")
			}
		} else {
			console.log("Seems like your firebase session didn't return a currentUser");
		}
	}

	componentDidMount() {
		var user = authRef.currentUser;
		
		if (user) {
			var nameToDisplay = user.email;
			if (user.displayName) {
				nameToDisplay = user.displayName;
			}
			this.setState({
				currentDisplayName: nameToDisplay,
				userEmail: user.email,
			});
		}
	}

	render() {
		return (
			<ScrollView automaticallyAdjustContentInsets={false} 
		        ref={'scrollView'}
		        style={[AppStyles.container]}
		        contentContainerStyle={[AppStyles.containerCentered, styles.container]}>
				<View style={styles.textContainer}>
					<Text style={styles.text}>Display Name: {this.state.currentDisplayName}</Text>
					<Text style={styles.text}>Email: {this.state.userEmail}</Text>
				</View>
				
				<Form
		            ref="form"
		            type={this.state.formFields}
		            value={this.state.formValues}
		            options={this.state.options} />

		        <View style={[AppStyles.flex1, AppStyles.paddingRight, AppStyles.containerCentered]}>
					<Button buttonStyles={styles.updateButton} text={"Update"} onPress={this.update.bind(this)} />
				</View>
			</ScrollView>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		paddingTop: 30,
		paddingBottom: 20,
		paddingLeft: 20,
		paddingRight: 20,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	textContainer: {
		paddingBottom: 30,
	},
	text: {
		fontSize: 16,
		fontWeight: '500',
		fontFamily: AppConfig.baseFont
	},
	updateButton: {
		alignItems: 'center',
		width: 150,
		borderRadius: 5,
	},
});

module.exports = UpdateProfile;