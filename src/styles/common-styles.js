'use-strict';

import React, {
	StyleSheet
} from 'react-native';

var AppConfig = require('../config/AppConfig');

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppConfig.appBgColor,
        height: AppConfig.windowHeight,
        width: AppConfig.windowWidth,
    },
    login: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppConfig.appBgColor,
    },
    welcome: {
       textAlign: 'center',
       margin: 10,
    },
    textinput: {
        height: 40, 
        borderColor: 'red', 
        borderWidth: 1,
    },
    primaryButton: {
        margin: 10,
        padding: 15,
        backgroundColor: '#529ecc',
    },
    formButton: {
        backgroundColor: '#4099FF',
        height: 50,
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    primaryButtonText: {
        color: '#FFF',
        fontSize: 15,
    },
    processingAnimation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        bottom: 150,
    },

    //Home page
    navbarButton: {
        width: 26,
        height: 26,
        left: 20,
        top: 9,
        tintColor: '#FFFFFF',
    },
    appContainer: {
        backgroundColor: "#000",
    },
    navbar: {
        width: AppConfig.windowWidth,
        height: 40,
    },
    baseText: {
        color: AppConfig.textColor,
        fontFamily: AppConfig.baseFont,
    },
    strong: {
        fontWeight: '900',
    },
    navbarTitle: {
        color: '#FFFFFF',
        bottom: 6,
        fontSize: 13,
    },

});

module.exports = styles;