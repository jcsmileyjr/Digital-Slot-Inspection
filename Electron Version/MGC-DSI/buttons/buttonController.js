myApp.controller('buttonController',  function($scope, $state, Button, IssueCounter, SlotMachine){
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //assigns the slot machine, received as a parameter, location to the scope's location 
    $scope.location= $scope.currentSlotMachine.location;
        
    //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
    $scope.serialNumber = $scope.currentSlotMachine.serialNumber;    
    
    //Loads the Button compliance issues used in the button.html checkboxes
    $scope.button = Button.getButton();
    
    //function used in the checked() function to add button compliance issues to the buttonTracker and update the issue counter.
    $scope.addButtonIssue = function(number){
        IssueCounter.addToCount();
        Button.addButtonIssue(number);
    }
    
    //function used in the checked() function to subtract button compliance issues to the buttonTracker and update the issue counter.    
    $scope.removeButtonIssue = function(number){
        IssueCounter.subtractFromCount(); 
        Button.subtractButtonIssue(number);
    }
    
    //function used on the button.html to add or subtract button compliance issues to the buttonTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){
        //if the checkbox is checked (found property is true) then add the issue
        if($scope.button[number].found==true) {
            $scope.addButtonIssue(number)
        } 
        //if the checkbox is un-checked(found property is false) then remove issue
        if($scope.button[number].found==false){
            $scope.removeButtonIssue(number)
        }
    }
    
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of buttonController