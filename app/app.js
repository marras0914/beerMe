'use strict';

var angular = require('angular');
var ngRoute = require('angular-route');
var ngAnimate = require('angular-animate');

var app = angular.module('beerApp', ['ngRoute', 'ngAnimate']);

app.config(require('./config'));

app.$inject = ['ngRoute', 'ngAnimate'];

require('./scripts/services');
require('./scripts/controllers');
require('./scripts/directives');
