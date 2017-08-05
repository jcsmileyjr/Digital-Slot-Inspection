myApp.controller('mealBookController',  function($scope, $state, MealBook, IssueCounter){
    
    //Loads the Mealbook compliance issues used in the mealbook.html checkboxes
    $scope.mealBook = MealBook.getMealBook();
    
    //function used in the checked() function to add mealbook compliance issues to the mealBookTracker and update the issue counter.
    $scope.addMealBookIssue = function(number){
        IssueCounter.addToCount();
        MealBook.addMealBookIssue(number);
    }
    
    //function used in the checked() function to subtract mealbook compliance issues to the mealBookTracker and update the issue counter.    
    $scope.removeMealBookIssue = function(number){
        IssueCounter.subtractFromCount(); 
        MealBook.subtractMealBookIssue(number);
    }
    
    //function used on the mealBook.html to add or subtract mealbook compliance issues to the mealBookTracker when a checkbox is checked and update the issue counter.
    $scope.checked= function(number){ 
        if($scope.mealBook[number].found==true) {
            $scope.addMealBookIssue(number)
        } 
        if($scope.mealBook[number].found==false){
            $scope.removeMealBookIssue(number)
        }
    }
    
    //redirect to issues.html
    $scope.confirm = function(){
        $state.go('nav');
    };
    
});//end of the issueController Service