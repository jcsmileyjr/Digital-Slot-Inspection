myApp.controller('listController',  function($scope, $state, Compliance){
    
    //gets the compliance array of slot machines with violations from the Compliance service
    $scope.compliance = Compliance.getCompliance();
    
});//end of buttonController