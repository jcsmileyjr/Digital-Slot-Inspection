/*Update the compliance object so it can be listed and sorted. In the desktop version will save to file. */
myApp.factory('Compliance', ["SlotMachine", "IssueCounter", "MealBook","Button", "Lights", "Touchscreen", function (SlotMachine, IssueCounter, MealBook, Button, Lights, Touchscreen) {

    //array to hold a saved slot machine with compliance issues 
    var compliance = [];
    
    return {
        
        //function to saved slot machine object with compliance issues and marked as completed
       completed: function(){
           //current slot machine serial number
           var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
           
           //current slot machine number of compliance issues found
           var numberOfIssues = IssueCounter.getCurrentCount();
           
           //list of arrays of compliance issues
           var mealBook = MealBook.getMealBookTracker();
           var button = Button.getButtonTracker();
           var lights = Lights.getLightsTracker();
           var touchscreen = Touchscreen.getTouchscreenTracker();           

           //add to the array the current slot machine identifer and compliance issues
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": true, "mealBook": mealBook, "button":button, "lights": lights, "touchscreen":touchscreen});
           
	   },//end of completed function
        
        //function to save a slot machine with no compliance issues to the compliance array and marked as completed
        compliantCompleted: function(){
        
            //current slot machine serial number
            var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
           
            //add to the array the current slot machine identifer and compliance issues            
            compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":0, "completed": true, "mealBook":[], "button":[], "lights":[], "touchscreen":[]});
            
        },
        
        //function to saved slot machine object with compliance issues, but NOT marked as completed        
        skipCompleted: function(){

           //current slot machine serial number
           var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
           
           //current slot machine number of compliance issues found
           var numberOfIssues = IssueCounter.getCurrentCount();
           
           //list of arrays of compliance issues
           var mealBook = MealBook.getMealBookTracker();
           var button = Button.getButtonTracker();
           var lights = Lights.getLightsTracker();
           var touchscreen = Touchscreen.getTouchscreenTracker();           

           //add to the array the current slot machine identifer and compliance issues
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": false, "mealBook": mealBook, "button":button, "lights": lights, "touchscreen":touchscreen});        
        }, 
        
        //return the compliance array of objects
        getCompliance: function(){
            return compliance;
        },
        
        //reset all compliance issues
        resetAllComplianceTrackers: function(){
            //reset the issueCount object to 0;
            IssueCounter.resetCount();
            
            //Reset all compliance trackers to empty and compliance arrays found property to false. Therefore reseting checkboxes on the compliance pages.
            MealBook.resetMealBookTracker();
            MealBook.resetMealBookCheckbox();
            Button.resetButtonTracker();
            Button.resetButtonCheckbox();
            Lights.resetLightsCheckbox();
            Lights.resetLightsTracker();
            Touchscreen.resetTouchscreenTracker();
            Touchscreen.resetTouchscreenCheckbox();
        }
                
        
    }/*End of main Return*/
    
    
}]);