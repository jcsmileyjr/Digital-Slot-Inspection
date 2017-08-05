myApp.controller('actionController',  function($scope, Compliance, SlotMachine, MealBook){
    
    $scope.saveCompleted = function(){

        
        //save the  current slot machine details and compliance issues found
        Compliance.completed();
        
        //reset all compliance issue trackers
        Compliance.resetAllComplianceTrackers();
        
        //Navigate to the next slot machine
        SlotMachine.getNextSlotMachine();
/*testing*/        
        $scope.tracker = Compliance.getCompliance();
        $scope.tickle = MealBook.getMealBookTracker();
        $scope.find = SlotMachine.getCurrentSlotMachine();
    }
    
    
});//end of the issueController Service