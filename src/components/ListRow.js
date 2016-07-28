'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

var AppStyles = require('../styles/common-styles');
var AppConfig = require('../config/AppConfig');

class ListRow extends Component {
	onPress() {
		if(this.props.onPress) this.props.onPress(this.props.index);
	}

	render() {
		if(this.props.image) {
			return (
				<TouchableOpacity
					style={styles.listRow}
					onPress={this.onPress} activeOpacity={0.7}>
					<Image 
						source={{uri: this.props.image}}
						style={styles.imageBackgroundImage}>

						<Text style={[AppStyles.base,styles.listRowText]}>{this.props.title.toUpperCase()}</Text>
					</Image>
				</TouchableOpacity>
			)
		} else {
			return (
				<TouchableOpacity
					style={styles.listRow}
					onPress={this.onPress} activeOpacity={0.7}>
					<Text style={[AppStyles.base,styles.listRowText]}>{this.props.title.toUpperCase()}</Text>
				</TouchableOpacity>
			)
		}
	}
}

var styles = StyleSheet.create({
	listRow: {
		left: 0,
		right: 0,
	},
	listRowInner: {
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: AppConfig.borderColor,
	},
	listRowText: {
		color: AppConfig.textColor,
		textAlign: 'center',
		fontWeight: '500',
		backgroundColor: 'transparent',
	},
	listRowImage_text: {
		color: "#FFF",
	},

	// With Image
	imageBackground: {
		backgroundColor: "#333",
	},
	imageBackgroundImage: {
		height: AppConfig.windowHeight / 4,
		width: AppConfig.windowWidth,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 1,
	}
});

module.exports = ListRow;