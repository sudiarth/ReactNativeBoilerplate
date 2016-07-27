/**
 *	Forms page example
 */
'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
} from 'react-native';

// For more on how to customize this view, go to https://www.npmjs.com/package/react-native-scrollable-tab-view
var ScrollableTabView = require('react-native-scrollable-tab-view');

// CHANGEME - change to your class name
class TabViewExample extends Component {
	render() {
		return (
			<ScrollableTabView>
				<View style={styles.mainView} tabLabel="Tab 1"><Text>Tab 1 stuff</Text></View>
        		<View style={styles.mainView} tabLabel="Tab 2"><Text>Tab 2 content</Text></View>
        		<View style={styles.mainView} tabLabel="Tab 3"><Text>Content on tab 3</Text></View>
        		<View style={styles.mainView} tabLabel="Tab 4"><Text>Tab 4 is the best</Text></View>
			</ScrollableTabView>
		)
	}
}

var styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

module.exports = TabViewExample;
module.exports.detail = {
	title: "Scrollable Tabe View Example" // CHANGEME
};