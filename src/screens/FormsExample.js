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

// 3rd party components
var FormValidation = require('tcomb-form-native');

var Button = require('../components/Button');

// CHANGEME - change to your class name
class FormsExample extends Component {
	render() {
		var Form = FormValidation.form.Form;

		return (
			<ScrollView automaticallyAdjustContentInsets={false}>
				<View>
					<Text>FormsExample test</Text>
				</View>
			</ScrollView>
		)
	}
}

module.exports = FormsExample;
module.exports.detail = {
	title: "Forms Example" // CHANGEME
};