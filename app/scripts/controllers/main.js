'use strict';


function GetBeerCtrl(apiService) {
	this.test = "Hello Astronauts!";
	this.apiService = apiService;
	
	this.beer;
	
	this.getData();
};

GetBeerCtrl.prototype.getData = function() {
	var self = this;
	this.apiService.getBeers().then(function(response) {
		console.log(response);

		self.beer = response.data.data;

	}, function(data, status, headers, config){
		$log.log(data.error + ' ' + status);
	});
	
};

GetBeerCtrl.$inject = ['apiService'];

module.exports = GetBeerCtrl;



