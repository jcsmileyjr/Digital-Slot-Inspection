myApp.controller('softwareController',  function($scope, $state, Software, IssueCounter, SlotMachine){
    
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
});//end of the softwareController Service