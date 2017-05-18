/*
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': './lib/requirejs-domready/domReady',
        'angular': './lib/angular/angular.min',
        'angular-sanitize' : './lib/angular-sanitize/angular-sanitize.min',
        'angular-ui-router' : './lib/angular-ui-router/angular-ui-router.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});
