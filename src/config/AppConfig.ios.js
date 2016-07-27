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

/* ==============================
Export App Options
=============================== */
exports.title = 'ReactNativeBoilerplate';

/* ===============================
Default Style Variables 
=============================== */
// Window Dimensions
var window = Dimensions.get('window');
exports.windowHeight = window.height;
exports.windowWidth = window.width;

// General Element Dimensions
var navbarHeight = 63;
exports.navbarHeight = navbarHeight;
exports.statusBarHeight = 22;

// Grid
exports.grid_half = window.width * 0.5;
exports.grid_third = window.width * 0.333;
exports.grid_twoThirds = window.width * 0.666;
exports.grid_quarter = window.width * 0.25;
exports.grid_threeQuarters = window.width * 0.75;

// Fonts
exports.baseFont = 'Avenir';

// Colors
exports.primaryColor = "#4099FF";
exports.textColor = "#555";
exports.borderColor = "#E7E7E7";
exports.appBgColor = "#F5FCFF";
exports.navbarBgColor = "#0099CC";