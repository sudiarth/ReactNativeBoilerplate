/**
 * Global App Config
 */
'use strict';

/* ==============================
Initialise Component
=============================== */
// React
import React, { Component } from 'react';
var Dimensions = require('Dimensions');
var Window = Dimensions.get('window');

// CHANGEME
exports.appTitle = "ReactNativeBoilerplate";

// Window Dimensions
exports.windowHeight = Window.height;
exports.windowWidth = Window.width;

// Firebase API Configs - CHANGEME
exports.apiKey = "AIzaSyAA_Oyg7qciFv1WZbJe7iFFXwvMMrZoazw";
exports.authDomain = "reactnativeboilerplate.firebaseapp.com";
exports.databaseURL = "https://reactnativeboilerplate.firebaseio.com";
exports.storageBucket = "reactnativeboilerplate.appspot.com";

// General Element Dimensions
var navbarHeight = 63;
exports.navbarHeight = navbarHeight;
exports.statusBarHeight = 22;

// Fonts
exports.baseFont = 'Avenir';

// Colors
exports.primaryColor = "#4099FF";
exports.textColor = "#555";
exports.borderColor = "#E7E7E7";
exports.appBgColor = "#F5FCFF";
exports.navbarBgColor = "#0099CC";