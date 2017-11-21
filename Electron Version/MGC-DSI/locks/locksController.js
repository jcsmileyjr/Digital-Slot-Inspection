myApp.controller('locksController',  function($scope, $state, Locks, IssueCounter, SlotMachine){
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //assigns the slot machine, received as a parameter, location to the scope's location 
    $scope.location= $scope.currentSlotMachine.location;
        
    //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
    $scope.serialNumber = $scope.currentSlotMachine.serialNumber;    
    
    //Loads the Mealbook compliance issues used in the locks.html checkboxes
    $scope.locks = Locks.getLocks();
    
    //function used in the checked() function to add locks compliance issues to the locksTracker and update the issue counter.
    $scope.addLocksIssue = function(number){
        IssueCounter.addToCount();
        Locks.addLocksIssue(number);
    }
    
    //function used in the checked() function to subtract locks compliance issues to the locksTracker and update the issue counter.    
    $scope.removeLocksIssue = function(number){
        IssueCounter.subtractFromCount(); 
        Locks.subtractLocksIssue(number);
    }
    
    //function used on the locks.html to add or subtract locks compliance issues to the locksTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){ 
        if($scope.locks[number].found==true) {
            $scope.addLocksIssue(number)
        } 
        if($scope.locks[number].found==false){
            $scope.removeLocksIssue(number)
        }
    }
    
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of the locksController Service