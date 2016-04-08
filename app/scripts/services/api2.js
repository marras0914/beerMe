'use strict';

function AnotherService($http) {
    this.$http = $http;
    this.url = "/mars/";
};

AnotherService.prototype.moreBeers = function() {
    console.log('moreBeers from api2');
    // Return promise for controller to use.
    return this.$http.post(this.url);
};

module.exports = AnotherService;


