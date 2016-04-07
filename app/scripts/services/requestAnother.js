'use strict';

function AnotherService($http) {
    this.$http = $http;
    this.url = "/mars/";
};

AnotherService.prototype.moreBeers = function() {
    // Return promise for controller to use.
    return this.$http.get(this.url)
};

module.exports = AnotherService;


