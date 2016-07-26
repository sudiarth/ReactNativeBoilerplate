'use-strict';

import React, { Component } from 'react';

import { 
	View,
	Text,
	StyleSheet,
	AsyncStorage,
	Navigator,
	ActivityIndicator
} from 'react-native';

var Button = require('../components/Button');
var HomeOrLogin = require('./HomeOrLogin');

var styles = require('../styles/common-styles');

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userEmail: null,
			userId: null
		};
	}

	logout() {
		AsyncStorage.removeItem('user_data');
		this.props.navigator.immediatelyResetRouteStack([{
			component: HomeOrLogin
		}]);
	}

	componentWillMount() {
		AsyncStorage.getItem('user_data').then((user_data_json) => {
			let user_data = JSON.parse(user_data_json);
			console.log(user_data);
			this.setState({
				userEmail: user_data.email,
				userId: user_data.uid
			});
		});
	}

	render() {
		if (!this.state.userEmail) {
			return (
				<ActivityIndicator
        			animating={this.state.isLoading}
        			style={[styles.processingAnimation, {height: 80}]}
        			size="large" />
        	);
		}

		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome {this.state.userEmail}!
					You're currently logged in.
				</Text>
				<Button 
				    text="Logout" 
				    onPress={this.logout.bind(this)} />
			</View>
		)
	}
}

module.exports = Home;