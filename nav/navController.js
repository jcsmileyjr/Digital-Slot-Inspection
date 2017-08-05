myApp.controller('navController', ["$scope", "SlotMachine","Compliance", "IssueCounter",  function($scope, SlotMachine, Compliance, IssueCounter){
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    //function to setup the current slot machine location and serial number    
    $scope.setSlotMachine = function(slotMachine){
        
        //assigns the slot machine, received as a parameter, location to the scope's location 
        $scope.location= slotMachine.location;
        
        //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
        $scope.serialNumber = slotMachine.serialNumber;
    };
    
    //use the setSlotMachine function to setup the starting slot machine location and serial number
    $scope.setSlotMachine($scope.currentSlotMachine);
    
    //function use by the navigation "Backward" button to move the slot machine location backward
    $scope.previousSlotMachine = function(){
        //use the SlotMachine service to get the slot machine before the current location to setup a new currentSlotMachine
        $scope.currentSlotMachine = SlotMachine.getPreviousSlotMachine();
        
        //function to setup the new current slot machine location and serial number
        $scope.setSlotMachine($scope.currentSlotMachine);  
    };
    
    //function use by the navigation "Forward" button to move the slot machine location forward
    $scope.nextSlotMachine = function(){
        //use the SlotMachine service to get the slot machine after the current location to setup a new currentSlotMachine
        $scope.currentSlotMachine = SlotMachine.getNextSlotMachine();
        //function to setup the new current slot machine location and serial number
        $scope.setSlotMachine($scope.currentSlotMachine);  
    };
    
    //function use by the nav "Search" button to move the slot machine location the user chosen  location
    $scope.searchSlotMachine = function(userLocation){
        
        //use the SlotMachine service to get the slot machine of the user choice to setup a new currentSlotMachine
        $scope.currentSlotMachine = SlotMachine.getSearchSlotMachine(userLocation);      
        //function to setup the new current slot machine location and serial number
        $scope.setSlotMachine($scope.currentSlotMachine);
        
    };
    
    //display the total number of compliance issues found from IssueCounter issueCounter object
    $scope.numberOfIssues = IssueCounter.getCurrentCount();    
    
    //function to save all of the compliance issues found with a slot machine and move to the next slot machine
    $scope.saveCompleted = function(){
        
        //save the  current slot machine details and compliance issues found
        Compliance.completed();
                
        //reset all compliance issue trackers
        Compliance.resetAllComplianceTrackers();
                
        //use the SlotMachine service to get the slot machine after the current location to setup a new currentSlotMachine
        $scope.currentSlotMachine = SlotMachine.getNextSlotMachine();
        
        $scope.numberOfIssues = IssueCounter.getCurrentCount();
            
        //function to setup the new current slot machine location and serial number
        $scope.setSlotMachine($scope.currentSlotMachine);  
        
    }
    
}]);