myApp.controller('reelsController',  function($scope, $state, Reels, IssueCounter, SlotMachine){
    
    //use the SlotMachine service to get the slot machine at the current location to setup a new currentSlotMachine    
    $scope.currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    
    //assigns the slot machine, received as a parameter, location to the scope's location 
    $scope.location= $scope.currentSlotMachine.location;
        
    //assigns the slot machine, received as a parameter, serial number to the scope's serial number 
    $scope.serialNumber = $scope.currentSlotMachine.serialNumber;    
    
    //Loads the Mealbook compliance issues used in the reels.html checkboxes
    $scope.reels = Reels.getReels();
    
    //function used in the checked() function to add reels compliance issues to the reelsTracker and update the issue counter.
    $scope.addReelsIssue = function(number){
        IssueCounter.addToCount();
        Reels.addReelsIssue(number);
    }
    
    //function used in the checked() function to subtract reels compliance issues to the reelsTracker and update the issue counter.    
    $scope.removeReelsIssue = function(number){
        IssueCounter.subtractFromCount(); 
        Reels.subtractReelsIssue(number);
    }
    
    //function used on the reels.html to add or subtract reels compliance issues to the reelsTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){ 
        if($scope.reels[number].found==true) {
            $scope.addReelsIssue(number)
        } 
        if($scope.reels[number].found==false){
            $scope.removeReelsIssue(number)
        }
    }
    
    //redirect to nav.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of the reelsController Service