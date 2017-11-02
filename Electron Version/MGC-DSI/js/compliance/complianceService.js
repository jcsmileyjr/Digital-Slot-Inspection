/*Update the compliance object so it can be listed and sorted. In the desktop version will save to file. */
myApp.factory('Compliance', ["SlotMachine", "IssueCounter", "MealBook","Button", "Lights", "Touchscreen","Locks", "Reels", "Software", function (SlotMachine, IssueCounter, MealBook, Button, Lights, Touchscreen, Reels, Locks, Software) {
    
    //Enable the use of the file system module native to node.js use to read,write, or update files on the computer
    var fs = require('fs');  
    
    var jsPDF = require('jsPDF')
    var doc = new jsPDF('p', 'mm', 'a4');
    
    //sets the path to the inspection.pdf file in the root directory in the client folder.
    var inspectionPDF ='inspection.pdf';
    
    //sets the path to the compliance.json file in the root directory in the client folder.
    var complianceData = __dirname +'/compliance.json';
    
    //sets the path to the compliance.json file in the root directory in the client folder.
    var complianceStartData = __dirname +'/complianceStart.json';    
    
    //array to hold a saved slot machine with compliance issues parsed from the complianceDownloaded string object
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

           //add to the compliance array the current slot machine identifer and compliance issues if the current object has an issue
           if(numberOfIssues > 0){
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": "Completed", "mealBook": mealBook, "button":button, "lights": lights, "touchscreen":touchscreen, "locks": locks, "reels":reels, "software": software});
           }
           
            //transform the current compliance json into a string
            newCompliance = JSON.stringify(compliance);
            
            //writes the new string object to the compliance.json
            fs.writeFileSync(complianceData, newCompliance, 'utf8');           
           
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
            if(numberOfIssues > 0){    
           compliance.push({"serialNumber":currentSlotMachine.serialNumber, "numberOfIssues":numberOfIssues, "completed": "Skip", "mealBook": mealBook, "button":button, "lights": lights, "touchscreen":touchscreen, "locks": locks, "reels":reels, "software": software}); 
            }
            
            //transform the current compliance json into a string
            newCompliance = JSON.stringify(compliance);
            
            //writes the new string object to the compliance.json
            fs.writeFileSync(complianceData, newCompliance, 'utf8');            
            
           //update the current slot machine completed property           
           SlotMachine.updateSlotMachineSkip();            
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
        },
        
        //continue a previous inspection by loading older JSONS
        continueSlotInspectionCompliance: function(){
            
            // use the file system provide by node.js to read the json data into a variable.
            var complianceDownloaded = fs.readFileSync(complianceData);

            //array to hold a saved slot machine with compliance issues parsed from the complianceDownloaded string object
            compliance = JSON.parse(complianceDownloaded);              
            
        },//end of function        
                
        //create a slot inspection compliance object
        createSlotInspectionCompliance: function(){
            // use the file system provide by node.js to read the json data into a variable.
            var complianceStart = fs.readFileSync(complianceStartData);

            //array to hold a saved slot machine with compliance issues parsed from the complianceDownloaded string object
            compliance = JSON.parse(complianceStart); 
        },//end of function
        
        printPDF: function(){
            //Old Version: window.document.getElementById("printArea");
            var source = $('#printArea').html();
            
            //copy from https://www.codeproject.com/Questions/1194625/How-to-split-pdf-into-multiple-pages-in-jspdf
            specialElementHandlers = {
                 // element with id of "bypass"
                '#bypassme': function(element, renderer)
                {
                    // true = "handled elsewhere, bypass text extraction"
                    return true
                }
            }
            //doc.text(source, 10,10);
            doc.fromHTML(source, 15, 15,{'width': 100, 'elementHandlers': specialElementHandlers});
            //doc.setFontSize(20);
            //doc.setTextColor(0,0,0);
            doc.save('inspection.pdf');
            
        }
    }/*End of main Return*/
    
    
}]);