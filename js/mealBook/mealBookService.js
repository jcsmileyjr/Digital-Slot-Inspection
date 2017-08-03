/*a service tracks the Meal Book compliance issues found during the inspection*/
myApp.factory('MealBook', function () {

    /*array of MealBook compliance variables used to tracked which compliance variable was found*/
    var mealBook = [{"issue":"Excessive reel tilts", "found":false}, {"issue":"No signature", "found":false}, {"issue":"Wrong ink pen", "found":false}, {"issue":"Missing Meal Book", "found":false}];
    
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
        }
        
    }/*End of main Return*/
    
    
});