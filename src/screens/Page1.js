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
class Page1 extends Component {
	render() {
		var Form = FormValidation.form.Form;

		return (
			<ScrollView automaticallyAdjustContentInsets={false}>
				<View>
					<Text>Page1 test</Text>
				</View>
			</ScrollView>
		)
	}
}

module.exports = Page1;
module.exports.detail = {
	title: "Page 1" // CHANGEME
};