/*Update the compliance object so it can be listed and sorted. In the desktop version will save to file. */
myApp.factory('Compliance', ["SlotMachine", "IssueCounter", "MealBook","Button", "Lights", "Touchscreen","Locks", "Reels", "Software", function (SlotMachine, IssueCounter, MealBook, Button, Lights, Touchscreen, Reels, Locks, Software) {

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
           var reels = Reels.getLocksTracker();
           var locks = Locks.getReelsTracker();
           var software = Software.getSoftwareTracker();

           //add to the array the current slot machine identifer and compliance issues
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": "Completed", "mealBook": mealBook, "button":button, "lights": lights, "touchscreen":touchscreen, "locks": locks, "reels":reels, "software": software});
           
           //update the current slot machine completed property           
           SlotMachine.updateSlotMachineCompleted();
           
	   },//end of completed function
        
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
           var reels = Reels.getLocksTracker();
           var locks = Locks.getReelsTracker();
           var software = Software.getSoftwareTracker();

           //add to the array the current slot machine identifer and compliance issues
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": "Skip", "mealBook": mealBook, "button":button, "lights": lights, "touchscreen":touchscreen, "locks": locks, "reels":reels, "software": software}); 
            
           //update the current slot machine completed property           
           SlotMachine.updateSlotMachineSkip();            
        },
        
        //create a list of compliance issues to show in the list.html
        complianceList: function(){
            
            
            
        },
        
        reopenSkipSlotMachine: function(){
            
            //current slot machine serial number
            var currentSlotMachine = SlotMachine.getCurrentSlotMachine();
            
            //search compliance array for skip slot machine based on serialNumber. if you find it then update all trackers and numberOfIssues.
            //Some type of glich is causeing Reels and Locsk updateTrackers to cross but it works. 
            for(var i=0;i<compliance.length;i++)
                {
                    if(currentSlotMachine.serialNumber = compliance[i].serialNumber)
                        {
                            IssueCounter.updateCount(compliance[i].numberOfIssues);
                            MealBook.updateMealBookTracker(compliance[i].mealBook);
                            Button.updateButtonTracker(compliance[i].button);
                            Lights.updateLightsTracker(compliance[i].lights);
                            Touchscreen.updateTouchscreenTracker(compliance[i].touchscreen);
                            Reels.updateLocksTracker(compliance[i].reels);
                            Locks.updateReelsTracker(compliance[i].locks);
                            Software.updateSoftwareTracker(compliance[i].software);
                        }
                }
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
            Locks.resetReelsTracker();
            Locks.resetReelsCheckbox();
            Reels.resetLocksTracker();
            Reels.resetLocksCheckbox();
            Software.resetSoftwareTracker();
            Software.resetSoftwareCheckbox();
        }
                
        
    }/*End of main Return*/
    
    
}]);