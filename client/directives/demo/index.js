app.directive("demo", [function(){
	return {
		restrict: 'E',
		scope: {
			title: '@'
		},
    	templateUrl: 'client/directives/demo/index.html',
	}
}]);