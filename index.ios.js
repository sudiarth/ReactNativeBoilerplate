import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	AsyncStorage,
	Navigator,
} from 'react-native';

var styles = require('./src/styles/common-styles');

var Login = require('./src/screens/Login');
var Home = require('./src/screens/Home');
var Header = require('./src/components/Header');

// CHANGEME - Change the class name here to your project class name - be sure to do a Replace All
class ReactNativeBoilerplate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			component: null,
			loaded: false
		};
	}

	componentWillMount() {
		AsyncStorage.getItem('user_data').then((user_data_json) => {
			let user_data = JSON.parse(user_data_json);
			let component = { component: Login };

			if(user_data != null) {
				console.log("User data: " + user_data);
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
					initialRoute={{ component: this.state.component, passProps: { } }}
					configureScene={() => {
						return Navigator.SceneConfigs.FloatFromRight;
					}}
					renderScene={(route, navigator) => {
						if(route.component) {
							return React.createElement(route.component, { navigator });
						}
					}}
				/>
			)
		} else {
			return (
				<View style={styles.container}>
					<Header />
					<View style={styles.body}></View>
				</View>
			)
		}
	}
}

AppRegistry.registerComponent('ReactNativeBoilerplate', () => ReactNativeBoilerplate);
