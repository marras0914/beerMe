'use strict';

function MainCtrl(apiService, anotherService) {
	this.test = "Hello Astronauts!";
	this.apiService = apiService;
	this.anotherService = anotherService;
	
	this.beer;
	this.getData();
};

MainCtrl.prototype.getData = function() {
	var self = this;
	this.apiService.getBeers().then(function(response) {
		console.log(response);
		console.log('Hello from the MaicCtrl');

		self.beer = response.data.data;
		
		return self.beer;

		
	}, function(data, status, headers, config){
		$log.log(data.error + ' ' + status);
	});	
};

MainCtrl.prototype.requestAnother = [ 'self.beer', function(){
	this.anotherService.moreBeers().then(function(){
		console.log('Hello from requestAnother in MainCtrl');
	});
	

}];


MainCtrl.$inject = ['apiService', 'anotherService'];

module.exports = MainCtrl;



