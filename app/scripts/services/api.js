'use strict';

function ApiService($http) {
    this.$http = $http;
    this.url = "/space/";
};

ApiService.prototype.getBeers = function() {
    // Return promise for controller to use.
    return this.$http.get(this.url)
};

module.exports = ApiService;

