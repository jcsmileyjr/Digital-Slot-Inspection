myApp.controller('navController', ["$scope", "SlotMachine","Compliance", "IssueCounter",  function($scope, SlotMachine, Compliance, IssueCounter){
    
    //function to dynamically update the slot machine status note under the "open" button in the remote. 
    $scope.setStatus = function(completed){
        
        //set the text for each status type
        var incompleteMesage = "NOT Been Inspected";
        var completeMessage = "Already Completed. Click the Tools icon to review";
        var skipMessage = "NOT Finished and Completed.";
        
        //if the slot machine completed property equal incomplete, then the status variable is change to the incompleteMessage. 
        if(completed == "Incomplete")
            {
                $scope.status = incompleteMesage;
            }
        
        //if the slot machine completed property equal complete, then the status variable is change to the completeMessage.        
        if(completed == "Completed")
            {
                $scope.status = completeMessage;
            }
        
        //if the slot machine completed property equal skip, then the status variable is change to the skipMessage.        
        if(completed == "Skip")
            {
                $scope.status = skipMessage;
            }
    }//End of setStatus method    
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //function to setup the current slot machine location and serial number    
    $scope.setSlotMachine = function(slotMachine){
        
        //assigns the slot machine, received as a parameter, location to the scope's location 
        $scope.location= slotMachine.location;
        
        //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
        $scope.serialNumber = slotMachine.serialNumber;
        
        //assigns the slot machine, received as a parameter, completed status to the scope's completed 
        $scope.completed = slotMachine.completed;
        
        $scope.setStatus($scope.completed);
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
    
    //function to show the lower half of app to allow user to pick a compliance issue
    $scope.open = function(){
        $scope.showLowerHalf = true;
    }
    
    //funciton to hide/close the lower half of the app after a slot machine has been skip or saved. 
    $scope.close = function(){
        $scope.showLowerHalf = false; 
    }
    
}]);