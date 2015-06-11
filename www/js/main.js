/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
require.config({
    
    // 3rd party lib versions:
    // backbone         1.2.1
    // fastclick        1.0.6
    // handlebars       3.0.3
    // i18next          1.9.0
    // jquery           2.1.4
    // marionette       2.4.1 (bundled; includes BabySitter / Wreqr) 
    // require          2.1.18
    // spectrum         1.7.0
    // text             2.0.14
    // underscore       1.8.3

    baseUrl: 'lib',

    paths: {
        // folders
        app: '../js',
        utils: '../js/utils',
        tpl: '../tpl',
        // libraries
        'i18n': 'i18next.amd.withJQuery.min',
        'jquery': 'jquery-2.1.4.min',
        'languages': '../js/utils/languages',
        marionette: 'backbone.marionette',
        colorpicker: 'spectrum'
    },
    map: {
        '*': {
            'app/models': 'app/models/memory'
        }
    },
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },
        colorpicker: {
            deps: ['jquery']
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    }

});

// start the main application object in app.js
require(["app/Application"], function (Application) {
    "use strict";

    var runningOnApp = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;

    function startTheApp() {
        var theApp = new Application.Application();
        theApp.start();
        window.Application = theApp;
    };

    if ( runningOnApp ) {
        // "real" Cordova application - start the app after DeviceReady is fired
        document.addEventListener("deviceready", startTheApp, true);        
    } else {
        // Local web page - no cordova.js installed and no access to native plugins;
        // just start up the app now
        startTheApp();
    }    
    
});
