'use-strict';

import React, {
	StyleSheet
} from 'react-native';

var appBG = '#F5FCFF';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appBG,
    },
    login: {
        flex: .5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appBG,
    },
    welcome: {
       textAlign: 'center',
       margin: 10,
    },
    textinput: {
        height: 40, 
        borderColor: 'red', 
        borderWidth: 1
    },
    primaryButton: {
        margin: 10,
        padding: 15,
        backgroundColor: '#529ecc'
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
        fontSize: 15
    },
    processingAnimation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
        bottom: 150
    }
});

module.exports = styles;