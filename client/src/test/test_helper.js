require("babel-core/register")({
    retainLines: true,
    sourceMaps: "both"
});
require("babel-polyfill");

var jsdom = require('jsdom');
var chai = require('chai');

//  CREATE DOCUMENT AND WINDOW FOR JSDOM
//
var document = jsdom.jsdom('<!doctype html><html><body></body></html>');
var window = document.defaultView;

//  ATTACH DOCUMENT AND WINDOW TO NODES GLOBAL OBJECT
//
global.document = document;
global.window = window;
global.Config = require('./../config/test.config');

//  NOT SURE WHY NEED THIS 
//
// global.location = { href: ''}

global.fetch = require('node-fetch');

//  INVESTIGATE THIS FURTHER
//
Object.keys(window).forEach(function (key) {
    if (!(key in global)) {
        global[key] = window[key];
    }
});

chai.config.truncateThreshold = 0;