//Sets the variable myApp as a Angular applicatation named 'DSI'. The module ui-router is injected as a dependency to provide url routing. 
var myApp = angular.module('DSI', ['ui.router']);

// A .config function is used to provide 'state' and url routing for the app thru the stateProvider (from ui-router).
myApp.config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider, $state) {

    //If no route or link is select, the app redirects to the nav page
    $urlRouterProvider.otherwise('/splash');

    $stateProvider
        //The nav state redirects the user to the nav.html template and navController via the /nav url. 
        .state('nav', {
            url:'/nav',
            templateUrl: 'nav/nav.html',
            controller: "navController"
        })
        //The mealBook state redirects the user to the mealBook.html template and mealBookController via the /mealBook url. 
        .state('mealBook', {
            url:'/mealBook',
            templateUrl: 'mealBook/mealBook.html',
            controller: "mealBookController"
        })
        //The button state redirects the user to the button.html template and buttonController via the /button url. 
        .state('button', {
            url:'/button',
            templateUrl: 'buttons/button.html',
            controller: "buttonController"
        })
        //The lights state redirects the user to the lights.html template and lightsController via the /lights url. 
        .state('lights', {
            url:'/lights',
            templateUrl: 'lights/lights.html',
            controller: "lightsController"
        })
        //The touchscreen state redirects the user to the touchscreen.html template and touchscreenController via the /touchscreen url. 
        .state('touchscreen', {
            url:'/touchscreen',
            templateUrl: 'touchscreen/touchscreen.html',
            controller: "touchscreenController"
        })
        //The locks state redirects the user to the locks.html template and locksController via the /locks url. 
        .state('locks', {
            url:'/locks',
            templateUrl: 'locks/locks.html',
            controller: "locksController"
        })
        //The reels state redirects the user to the reels.html template and reelsController via the /reels url. 
        .state('reels', {
            url:'/reels',
            templateUrl: 'reels/reels.html',
            controller: "reelsController"
        })
        //The software state redirects the user to the software.html template and softwareController via the /software url. 
        .state('software', {
            url:'/software',
            templateUrl: 'software/software.html',
            controller: "softwareController"
        })
            //The list state redirects the user to the list.html template and listController via the /list url. 
        .state('list', {
            url:'/list',
            templateUrl: 'toolbar/list.html',
            controller: "listController"
        })
        //The splash state redirects the user to the splash.html template via the /splash url. 
        .state('splash', {
            url:'/splash',
            templateUrl: 'admin/splash.html',
            controller: "wizardController"
        })
        //The wizard state redirects the user to the wizard.html template and controller via the /wizard url. 
        .state('wizard', {
            url:'/wizard',
            templateUrl: 'admin/wizard.html',
            controller: "wizardController"
        })       
    
}]);
