/*a service that returns a slot machine based on the location property from the slotMachine array of objects*/
myApp.factory('SlotMachine', function(){
    
    //Enable the use of the file system module native to node.js use to read,write, or update files on the computer
    var fs = require('fs');
    
    //sets the path to the slotmachine.json (contains slot machine objects) file in the root directory in the client folder.
    var slotmachineData = __dirname +'/slotmachine.json';
    
    //sets the path to the completedcount.json (contains the completedcount object) file in the root directory in the client folder.
    var completedCountData = __dirname +'/completedcount.json';  
    
    //sets the path to the completedcountStart.json (contains the completedcount object) file in the root directory in the client folder.
    var completedCountStartData = __dirname +'/completedcountStart.json';      
    
    var excelFile = __dirname +'/test.xls';  
            
    // use the file system provide by node.js to read the json data into a variable.
    //var slots = fs.readFileSync(slotmachineData);
            
    //parse the information read into a json format use to host all slot machines in the app
    //var slotMachines = JSON.parse(slots);    
    
    /*object to hold the current slot machine's location*/
    var currentLocation = {"location":2};
    

            
    // use the file system provide by node.js to read the json data into a variable.
    //var countCompleted = fs.readFileSync(completedCountData);
            
    //parse the information read into a json format object use to count the completed Slot machines
    //var completedCount = JSON.parse(countCompleted);
    
    var slotMachines = [];
    var completedCount = "";
    
    return {
        /*function that manipulate the completedCount object by incrementing the totalCompleted property and calculating the inspectionProgress property. */
        updateCompletedSlotMachineCount: function(){
            completedCount.totalCompleted = completedCount.totalCompleted + 1;
            completedCount.inspectionProgress = (completedCount.totalCompleted / slotMachines.length)*100;  
            
            //transform the completedCount json into a string
            newCount = JSON.stringify(completedCount);
            
            //writes the new string object to the completedcount.json
            fs.writeFileSync(completedCountData, newCount, 'utf8');            
        },
        
        /*function to calculate the current inspection completion percentage and return it*/
        getInspectionCompletion: function(){            
            return  completedCount.inspectionProgress;
        },
        
        /*function to return the current slot machine object*/
        getCurrentSlotMachine: function(){
            
            /*return the slot machine object at that array position*/
            return slotMachines[currentLocation.location];
        },
        
        /*function to return the slot machine before the current slot machine location*/
        getPreviousSlotMachine: function(){
            
            /*check if the current location is at the first element in the array*/
            if(currentLocation.location==0)
                {
                    /*assign the last index in the array to currentLocation*/
                    currentLocation.location= slotMachines.length-1;
            
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location]; 
                }
            else 
                {   
                    /*assign the previous currentLocaton number minus one to currentLocation*/
                    currentLocation.location= currentLocation.location - 1;
                    
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location];
                }
        },
        /*function to return the slot machine before the current slot machine location*/
        getNextSlotMachine: function(){
            /*check if the next location index is the last element in the array*/
            if((currentLocation.location + 1) == slotMachines.length)
                {   
                    /*assign the first index in the array to currentLocation*/
                    currentLocation.location= 0;
                    
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location];
                }
            else 
                {   
                    /*assign the previous currentLocaton number plus one to currentLocation*/
                    currentLocation.location += 1;
                    
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location];
                }
        },
        
        /*function to return the slot machine from a location chosen by the user*/
        getSearchSlotMachine: function(userLocation){   
            for(var i=0;i<slotMachines.length;i++){
                
                /*check if userLocaton is equal to the slot machine location at the current element/index of the array*/
                if(userLocation===slotMachines[i].location){
                    
                    /*assign the current number of loops, converted to an interger, to currentLocation*/
                    currentLocation.location = parseInt([i]);
                    
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location];
                }/*End of if statement*/
            }/*End of i-loop*/
        },/*end of getSearchSlotMachine method*/
        
        /*return the total count of the slot machines*/
        getTotalCountOfSlotMachines: function(){
            return slotMachines.length;
        },
        
        /*update the current slot machine completed property to completed*/
        updateSlotMachineCompleted: function(){
            slotMachines[currentLocation.location].completed = "Completed";

            //transform the slotMachines json into a string
            newSlots = JSON.stringify(slotMachines);
            
            //writes the new string object to the slotmachine.json
            fs.writeFileSync(slotmachineData, newSlots, 'utf8');
          
        },
        
        /*update the current slot machine completed property to skip*/
        updateSlotMachineSkip: function(){
            slotMachines[currentLocation.location].completed = "Skip";

            //transform the slotMachines json into a string
            newSlots = JSON.stringify(slotMachines);
            
            //writes the new string object to the slotmachine.json
            fs.writeFileSync(slotmachineData, newSlots, 'utf8');
              
        },
        
        //function use in the start button to process both copy and pasted excel lists to the wizard page textareas into a slot machine json used by the app.
        createSlotInspection: function(newLocations, newSerialNumbers){
            var locationArray = [];
            var serialNumberArray = [];
            var slot = [];  //create a array to hold the new slot machines array
           
            //Take the list of locations that was copy and pasted and split into elements of an array at each new line
            locationArray = newLocations.split("\n");

            //Take the list of serial numbers that was copy and pasted and split into elements of an array at each new line
            serialNumberArray = newSerialNumbers.split("\n");


            //for-loop to create slot machine objects from the provided locations and serial numbers into the slot array.
            for(var i=0;i<locationArray.length;i++){
                slot.push({"location":locationArray[i], "serialNumber": serialNumberArray[i], "completed": "Incomplete"});              
                }// end of for loop
            
            //transform the slotMachines json into a string
            newSlots = JSON.stringify(slot);
            
            //writes the new string object to the slotmachine.json
            fs.writeFileSync(slotmachineData, newSlots, 'utf8');
            
            //updates the slotMachines array from the new slot array of copy/pasted user slot machines objects
            slotMachines = slot;
            
            // use the file system provide by node.js to read the json data into a variable.
            var countCompletedStart = fs.readFileSync(completedCountStartData);

            //Start the completedCount object over to 0 by parseing the information read into a json format object use to count the completed Slot machines
            completedCount = JSON.parse(countCompletedStart);            

            
        },//end of createSlotInspection function
        
        //continue a previous inspection by loading older JSONS
        continueSlotInspectionSlotMachines: function(){
            // use the file system provide by node.js to read the json data into a variable.
            var slots = fs.readFileSync(slotmachineData);

            //parse the information read into a json format use to host all slot machines in the app
            slotMachines = JSON.parse(slots);    

            // use the file system provide by node.js to read the json data into a variable.
            var countCompleted = fs.readFileSync(completedCountData);

            //parse the information read into a json format object use to count the completed Slot machines
            completedCount = JSON.parse(countCompleted);          

            
        }//end of continueSlotInspection function
        
    }/*End of main Return*/
    
    
});