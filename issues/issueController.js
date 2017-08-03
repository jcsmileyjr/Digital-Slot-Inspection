myApp.controller('issueController',  function($scope, $state, IssueCounter){
    
    //display the total number of compliance issues found from IssueCounter issueCounter object
    $scope.numberOfIssues = IssueCounter.getCurrentCount();
    
    //redirect to mealbook.html
    $scope.mealBookPage = function(){
        $state.go('mealBook');
    };
    
});//end of the issueController Service