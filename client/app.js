var app = angular.module("app", [
	'ui.router',
	'ngMaterial',
]);

app.config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider){
	
	$urlRouterProvider.otherwise("/"); 
	$locationProvider.html5Mode(true);

}]);
