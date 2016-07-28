'use-strict';

import React, {
	StyleSheet
} from 'react-native';

var AppConfig = require('../config/AppConfig');

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        backgroundColor: AppConfig.appBgColor,
        height: AppConfig.windowHeight,
        width: AppConfig.windowWidth,
    },
    containerCentered: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    p: {
        fontFamily: AppConfig.baseFont,
        margin: 0,
        fontWeight: '500',
        color: AppConfig.textColor,
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
    primaryButton: {
        margin: 10,
        padding: 15,
        backgroundColor: '#529ecc',
        alignItems: 'center',
        justifyContent: 'center',
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

    //Login
    inputs: {
        marginTop: 10,
        marginBottom: 10,
        flex: .25
    },
    inputPassword: {
        marginLeft: 15,
        width: 20,
        height: 21
    },
    inputUsername: {
        marginLeft: 15,
        width: 20,
        height: 20
    },
    inputContainer: {
        padding: 10,
        borderWidth: 1,
        borderBottomColor: '#CCC',
        borderColor: 'transparent'
    },
    input: {
        position: 'absolute',
        left: 61,
        top: 12,
        right: 0,
        height: 20,
        fontSize: 14
    },
    forgotContainer: {
        alignItems: 'flex-end',
        padding: 15,
    },
    greyFont: {
        color: '#D8D8D8'
    },
    whiteFont: {
        color: '#FFF'
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