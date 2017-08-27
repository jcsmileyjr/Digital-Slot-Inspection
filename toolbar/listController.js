myApp.controller('listController',  function($scope, $state, Compliance, SlotMachine){
    
    //gets the compliance array of slot machines with violations from the Compliance service
    $scope.compliance = Compliance.getCompliance();
    
    //update the inspection completion progress
    $scope.inspectionProgress = SlotMachine.getInspectionCompletion();
    
});//end of buttonController