app.controller("DemoCtrl", ['$scope', 'DemoService', function($scope, DemoService){
	
	$scope.title = DemoService.title;

}]);
