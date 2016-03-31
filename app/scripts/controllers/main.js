'use strict';


function MainCtrl(apiService) {
	this.test = "Hello Astronauts!";
	this.apiService = apiService;
	// this.wikiData;
	this.beer;
	
	this.getData();
};

MainCtrl.prototype.getData = function() {
	var self = this;
	this.apiService.getAstronauts().then(function(response) {
		console.log(response);

		// self.wikiData = response.data.people;
		self.beer = response.data.totalResults;

	});
};


module.exports = MainCtrl;



// var app = angular.module('myApp', []);
// app.controller('myCtrl', function($scope, $http) {
//     $http.get("welcome.htm")
//     .then(function(response) {
//         $scope.myWelcome = response.data;
//     });
// });