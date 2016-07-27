'use-strict';

import React, { Component } from 'react';

import { 
	StyleSheet,
	AsyncStorage,
	Navigator,
	ActivityIndicator
} from 'react-native';

var styles = require('../styles/common-styles');

class HomeOrLogin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			component: null
		};
	}

	componentWillMount() {
		// Lazy load Home and Login to avoid cyclic dependency
		var Login = require('./Login');
		var Home = require('./Home');
		
		AsyncStorage.getItem('user_data').then((user_data_json) => {
			let user_data = JSON.parse(user_data_json);
			let component = { component: Login };

			if(user_data != null) {
				// console.log("User data: " + user_data);  //Line for debugging
				//User is currently logged in
				this.setState({ component: Home });
			} else {
				this.setState(component);
			}
		});
	}

	render() {
		if(this.state.component) {
			return (
				<Navigator
					ref="rootNavigator"
					initialRoute={{ component: this.state.component }}
					configureScene={() => {
						return Navigator.SceneConfigs.FloatFromRight;
					}}
					renderScene={(route, navigator) => {
						if(route.component) {
							return React.createElement(route.component, { navigator });
						}
					}}
				/>
			);
		} else {
			return (
				<ActivityIndicator
        			animating={this.state.isLoading}
        			style={[styles.processingAnimation, {height: 80}]}
        			size="large" />
        	);
		}
	}
}

module.exports = HomeOrLogin;