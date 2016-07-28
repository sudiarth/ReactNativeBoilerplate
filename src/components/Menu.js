'use strict';

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    AsyncStorage
} from 'react-native';

// CHANGEME - Requred your screens here
var MainContent = require('./MainContent');
var TabViewExample = require('../screens/TabViewExample');
var FormsExample = require('../screens/FormsExample');
var ListViewExample = require('../screens/ListViewExample');

var HomeOrLogin = require('../screens/HomeOrLogin');

var AppConfig = require('../config/AppConfig');

class Menu extends Component {
	goToScreen(title, link) {
        this.props.navigate(title, link);
    }

    logout() {
        this.props.logout();
        // TODO : firebase deauthenticate
    }

    render() {
        // Programmatically generate links
        var linksJSX = [];

        var links = [
            // CHANGEME - Change these menu items to your pages
            // ['Home', Home],
            ['Home', MainContent],
            ['Tab View Example', TabViewExample],
            ['Forms Example', FormsExample],
            ['List View Example', ListViewExample]
        ];

        // Build the actual menu items
        for (var i = 0; i < links.length; i++) {
            linksJSX.push(
                <TouchableOpacity
                    key={i}
                    onPress={this.goToScreen.bind(this, links[i][0], links[i][1])}>
                    <View style={styles.menuItem}>
                        <Text style={[styles.baseText, styles.menuItemText]}>{links[i][0]}</Text>
                    </View>
                </TouchableOpacity>
            );
        }

        return (
            <View style={styles.menuContainer}>
                <View style={styles.menu}>
                    {linksJSX}
                    <TouchableOpacity onPress={this.logout.bind(this)}>
                        <View style={styles.logout}>
                            <Text style={[styles.baseText, styles.menuItemText]}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        width: AppConfig.windowWidth,
        backgroundColor: "#111111",
    },
    menu: {
        flex: 1,
        width: AppConfig.windowWidth * 0.68,
        height: AppConfig.windowHeight,
        backgroundColor: "#111111",
        padding: 20,
        paddingTop: AppConfig.statusBarHeight,
    },
    menuItem: {
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        paddingBottom: 10,
    },
    menuItemText: {
        fontSize: 17,
        fontWeight: '500',
        paddingTop: 10,
        flex: 1,
        color: "#EEE"
    },
    baseText: {
        color: AppConfig.textColor,
        fontFamily: AppConfig.baseFont,
    },
    logout: {
        marginTop: 50,
        borderBottomWidth: 0
    },
});

module.exports = Menu;