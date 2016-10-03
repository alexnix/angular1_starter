app.config(['$stateProvider', function($stateProvider){
  
	$stateProvider
	.state('demo', {
		url: '/demo',
		templateUrl: 'client/pages/demo/index.html',
		controller: 'DemoCtrl'
	});

}]);