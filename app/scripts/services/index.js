'use strict';

angular.module('beerApp')
    .service('apiService', require('./api'))
    .service('anotherService', require('./requestAnother'));
