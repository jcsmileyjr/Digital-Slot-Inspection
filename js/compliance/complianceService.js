/*Update the compliance object so it can be listed and sorted. In the desktop version will save to file. */
myApp.factory('Compliance', ["SlotMachine", "IssueCounter", "MealBook", function (SlotMachine, IssueCounter, MealBook) {

    //array to hold a saved slot machine with compliance issues 
    var compliance = [];
    
    return {
        
        //function to saved slot machine object with compliance issues and marked as completed
       completed: function(){
           //current slot machine serial number
           var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
           
           //current slot machine number of compliance issues found
           var numberOfIssues = IssueCounter.getCurrentCount();
           
           //array of MealBook compliance issues
           var mealBook = MealBook.getMealBookTracker();

           //add to the array the current slot machine identifer and compliance issues
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": true, "mealBook": mealBook});
           
	   },//end of completed function
        
        //function to save a slot machine with no compliance issues to the compliance array and marked as completed
        compliantCompleted: function(){
        
            //current slot machine serial number
            var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
           
            //add to the array the current slot machine identifer and compliance issues            
            compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":0, "completed": true, "mealBook":[]});
            
        },
        
        //function to saved slot machine object with compliance issues, but NOT marked as completed        
        skipCompleted: function(){

           //current slot machine serial number
           var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
           
           //current slot machine number of compliance issues found
           var numberOfIssues = IssueCounter.getCurrentCount();
           
           //array of MealBook compliance issues
           var mealBook = MealBook.getMealBookTracker();

           //add to the array the current slot machine identifer and compliance issues
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": false, "mealBook":mealBook});            
        }, 
        
        //return the compliance array of objects
        getCompliance: function(){
            return compliance;
        },
        
        //reset all compliance issues
        resetAllComplianceTrackers: function(){
            //reset the issueCount object to 0;
            IssueCounter.resetCount();
            
            //Reset the MealBook tracker to empty and MealBook array found property to false. Therefore reseting checkboxes on the MealBook.html page.
            MealBook.resetMealBookTracker();
            MealBook.resetMealBookCheckbox();
        }
                
        
    }/*End of main Return*/
    
    
}]);