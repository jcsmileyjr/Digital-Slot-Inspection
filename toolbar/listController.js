myApp.controller('listController',  function($scope, $state, Compliance, SlotMachine){
    
    //gets the compliance array of slot machines with violations from the Compliance service
    $scope.compliance = Compliance.getCompliance();
    
    //update the inspection completion progress
    $scope.inspectionProgress = SlotMachine.getInspectionCompletion();
    
    //function to print the end of the test screen
    $scope.printScreen = function(){
        window.print();
    }    
});//end of buttonController