'use strict';

angular.module('beerApp')
    .directive('sharedScope', require('./sharedScope'))
    .directive('isolateScope', require('./isolateScope'));
