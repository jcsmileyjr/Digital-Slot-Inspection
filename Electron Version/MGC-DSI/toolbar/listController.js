myApp.controller('listController',  function($scope, $state, Compliance, SlotMachine, InspectionDetails){
    
    //gets the compliance array of slot machines with violations from the Compliance service
    $scope.compliance = Compliance.getCompliance();
    
    //update the inspection completion progress
    $scope.inspectionProgress = SlotMachine.getInspectionCompletion();
    
    //get the slot inspection's details array to show in the list.html
    $scope.details = InspectionDetails.getDetails();
    
    //set the list.html casinoName varible to the current details array casinoName
    $scope.casinoName = $scope.details.casinoName;
    
    //set the list.html date varible to the current details array casinoName
    $scope.date = $scope.details.date;
    
    //set the list.html agentName varible to the current details array casinoName
    $scope.agentName = $scope.details.agentName;
    
    //function to print the end of the test screen
    $scope.printScreen = function(){
        window.print();
    }
       
});//end of buttonController