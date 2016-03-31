webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angular = __webpack_require__(1);
	var ngRoute = __webpack_require__(3);

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

	__webpack_require__(5);
	__webpack_require__(7);
	// require('./scripts/directives');


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	angular.module('beerApp').service('apiService', __webpack_require__(6));


/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	function ApiService($http) {
	    this.$http = $http;
	    this.url = "/space/";
	};

	ApiService.prototype.getAstronauts = function() {
	    // Return promise for controller to use.
	    return this.$http.get(this.url)
	};

	module.exports = ApiService;



/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var angualr = __webpack_require__(1);

	angular.module('beerApp').controller('MainCtrl', __webpack_require__(8));



/***/ },
/* 8 */
/***/ function(module, exports) {

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

/***/ }
]);