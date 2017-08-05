//Sets the variable myApp as a Angular applicatation named 'DSI'. The module ui-router is injected as a dependency to provide url routing. 
var myApp = angular.module('DSI', ['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {

    //If no route or link is select, the app redirects to the logIn page
    $urlRouterProvider.otherwise('/nav');

    $stateProvider
        //The issues state redirects the user to the issues.html template and issueController via the /issues url. 
        .state('nav', {
            url:'/nav',
            templateUrl: 'nav/nav.html',
            controller: "navController"
        })
        //The input state redirects the user to the input.html template and inputController via the /input url. 
        .state('mealBook', {
            url:'/mealBook',
            templateUrl: 'mealBook/mealBook.html',
            controller: "mealBookController"        
        })
    
}]);