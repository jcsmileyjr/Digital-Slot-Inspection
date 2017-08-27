/*a service tracks the Meal Book compliance issues found during the inspection*/
myApp.factory('MealBook', function () {

    /*array of MealBook compliance variables used to tracked which compliance variable was found*/
    var mealBook = [{"issue":"Excessive reel tilts in MEAL", "found":false}, {"issue":"No signature in MEAL", "found":false}, {"issue":"Wrong ink pen used in MEAL", "found":false}, {"issue":"Missing Meal Book", "found":false}];
    
    //array used to tracked found MealBook compliance issues
    var mealBookTracker= [];
    
    return {
        
        /*function to return the mealBookTracker array*/
        getMealBookTracker: function(){            
            return mealBookTracker;
        },
        
        // function to add an MealBook compliance issue to the MealBookTracker by corelating the index of the checkbox to the MealBook array.
        addMealBookIssue: function(number){
            mealBookTracker.push(mealBook[number].issue);  
        },
        
        // function to subtract an MealBook compliance issue from the MealBookTracker by corelating the index of the checkbox to the MealBook array.
        subtractMealBookIssue: function(number){
            //check if mealBookTracker is empty before proceeeding
            if(mealBookTracker.length >=0){
                //search the MealBookTracker array
                for(var i=0;i<mealBookTracker.length;i++){
                    //If a mealBook compliance issue matches a elemnt in the mealBookTracker array, remove it.
                    if(mealBook[number].issue==mealBookTracker[i]){
                        mealBookTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the mealBookTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetMealBookTracker: function(){
            mealBookTracker = [];
        },
        
        //function to return the list of Mealbook compliance issues.
        getMealBook: function(){
            return mealBook;
        },
        
        //Loop through each element in the mealBook array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetMealBookCheckbox(){                        
            for(var i=0;i<mealBook.length;i++){
                mealBook[i].found = false;
            }
        },
        
        //Loop through each element in the mealBook array. Loop through each element in the tracker array.  If the current tracker element issue mactches the current mealBook issue, then that issue.found property will be update to true. 
        updateMealBookTracker(tracker){
            for(var i=0;i<mealBook.length;i++){
                for(var j=0;j<tracker.length;j++){
                    if(tracker[j]==mealBook[i].issue){
                        mealBook[i].found = true;
                    }//end of if statement
                }// end of j-for looop
            }// end of i-for loop
        }
        
    }/*End of main Return*/
    
    
});