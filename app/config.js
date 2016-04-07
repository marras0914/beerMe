'use strict';

function config($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
};

config.$inject = ['$routeProvider', '$locationProvider'];

module.exports = config;