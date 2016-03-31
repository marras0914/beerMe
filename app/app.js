'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');

var app = angular.module('beerApp', ['ngRoute']);


app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

require('./scripts/services');
require('./scripts/controllers');
// require('./scripts/directives');
