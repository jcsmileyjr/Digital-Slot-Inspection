myApp.controller('softwareController',  function($scope, $state, Software, IssueCounter, SlotMachine){
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //assigns the slot machine, received as a parameter, location to the scope's location 
    $scope.signature= $scope.currentSlotMachine.EPROM;
        
    //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
    $scope.percentage = $scope.currentSlotMachine.holdPercentage;    
    
    //Loads the Mealbook compliance issues used in the software.html checkboxes
    $scope.software = Software.getSoftware();
    
    //function used in the checked() function to add software compliance issues to the softwareTracker and update the issue counter.
    $scope.addSoftwareIssue = function(number){
        IssueCounter.addToCount();
        Software.addSoftwareIssue(number);
    }
    
    //function used in the checked() function to subtract software compliance issues to the softwareTracker and update the issue counter.    
    $scope.removeSoftwareIssue = function(number){
        IssueCounter.subtractFromCount(); 
        Software.subtractSoftwareIssue(number);
    }
    
    //function used on the software.html to add or subtract software compliance issues to the softwareTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){ 
        if($scope.software[number].found==true) {
            $scope.addSoftwareIssue(number)
        } 
        if($scope.software[number].found==false){
            $scope.removeSoftwareIssue(number)
        }
    }
    
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of the softwareController Service