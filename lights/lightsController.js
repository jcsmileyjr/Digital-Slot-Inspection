myApp.controller('lightsController',  function($scope, $state, Lights, IssueCounter, SlotMachine){
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //assigns the slot machine, received as a parameter, location to the scope's location 
    $scope.location= $scope.currentSlotMachine.location;
        
    //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
    $scope.serialNumber = $scope.currentSlotMachine.serialNumber;    
    
    //Loads the Lights compliance issues used in the lights.html checkboxes
    $scope.lights = Lights.getLights();
    
    //function used in the checked() function to add lights compliance issues to the lightsTracker and update the issue counter.
    $scope.addLightsIssue = function(number){
        IssueCounter.addToCount();
        Lights.addLightsIssue(number);
    }
    
    //function used in the checked() function to subtract lights compliance issues to the lightsTracker and update the issue counter.    
    $scope.removeLightsIssue = function(number){
        IssueCounter.subtractFromCount(); 
        Lights.subtractLightsIssue(number);
    }
    
    //function used on the lights.html to add or subtract lights compliance issues to the lightsTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){
        //if the checkbox is checked (found property is true) then add the issue
        if($scope.lights[number].found==true) {
            $scope.addLightsIssue(number)
        } 
        //if the checkbox is un-checked(found property is false) then remove issue
        if($scope.lights[number].found==false){
            $scope.removeLightsIssue(number)
        }
    }
    
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of lightsController