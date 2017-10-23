myApp.controller('touchscreenController',  function($scope, $state, Touchscreen, IssueCounter, SlotMachine){
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //assigns the slot machine, received as a parameter, location to the scope's location 
    $scope.location= $scope.currentSlotMachine.location;
        
    //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
    $scope.serialNumber = $scope.currentSlotMachine.serialNumber;    
    
    //Loads the Touchscreen compliance issues used in the touchscreen.html checkboxes
    $scope.touchscreen = Touchscreen.getTouchscreen();
    
    //function used in the checked() function to add touchscreen compliance issues to the touchscreenTracker and update the issue counter.
    $scope.addTouchscreenIssue = function(number){
        IssueCounter.addToCount();
        Touchscreen.addTouchscreenIssue(number);
    }
    
    //function used in the checked() function to subtract touchscreen compliance issues to the touchscreenTracker and update the issue counter.    
    $scope.removeTouchscreenIssue = function(number){
        IssueCounter.subtractFromCount(); 
        Touchscreen.subtractTouchscreenIssue(number);
    }
    
    //function used on the touchscreen.html to add or subtract touchscreen compliance issues to the touchscreenTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){
        //if the checkbox is checked (found property is true) then add the issue
        if($scope.touchscreen[number].found==true) {
            $scope.addTouchscreenIssue(number)
        } 
        //if the checkbox is un-checked(found property is false) then remove issue
        if($scope.touchscreen[number].found==false){
            $scope.removeTouchscreenIssue(number)
        }
    }
    
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of touchscreenController