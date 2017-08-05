/*a service that returns a slot machine based on the location property from the slotMachine array of objects*/
myApp.factory('SlotMachine', function(){
    
    /*array of slot machine objects*/
    var slotMachines = [{"location":"1-1-1", "serialNumber":100100, "EPROM":"ASDF1000", "holdPercentage":89.1, "completed":false}, {"location":"1-1-2", "serialNumber":100102, "EPROM":"ASDF1002", "holdPercentage":89.1, "completed":false}, {"location":"1-1-3", "serialNumber":100103, "EPROM":"ASDF1003", "holdPercentage":89.1, "completed":false}, {"location":"1-1-4", "serialNumber":100104, "EPROM":"ASDF1004", "holdPercentage":89.1, "completed":false}, {"location":"1-1-5", "serialNumber":100105, "EPROM":"ASDF1005", "holdPercentage":89.1, "completed":false}, {"location":"1-2-1", "serialNumber":100200, "EPROM":"ASDF2001", "holdPercentage":89.1, "completed":false}, {"location":"1-2-2", "serialNumber":100202, "EPROM":"ASDF2002", "holdPercentage":89.1, "completed":false}, {"location":"1-2-3", "serialNumber":100203, "EPROM":"ASDF2003", "holdPercentage":89.1, "completed":false}, {"location":"1-2-4", "serialNumber":100204, "EPROM":"ASDF2004", "holdPercentage":89.1, "completed":false}, {"location":"1-2-5", "serialNumber":100205, "EPROM":"ASDF2005", "holdPercentage":89.1, "completed":false}];
    
    /*object to hold the current slot machine's location*/
    var currentLocation = {"location":4};
    
    var newSlot = {"slot":slotMachines[currentLocation.location]};
    
    
    
    return {
        
        /*function to return the current slot machine object*/
        getCurrentSlotMachine: function(){
            /*return the slot machine object at that array position*/
            //return slotMachines[currentLocation.location];
            return newSlot.slot;
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
                    //newSlot.slot = slotMachines[currentLocation.location];
                }
            else 
                {   
                    /*assign the previous currentLocaton number minus one to currentLocation*/
                    currentLocation.location= currentLocation.location - 1;
                    
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location];
                    //newSlot.slot = slotMachines[currentLocation.location];
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
                    //return presentSlotMachine.slot;
                }
            else 
                {   
                    /*assign the previous currentLocaton number plus one to currentLocation*/
                    currentLocation.location += 1;
                    
                    /*return the slot machine object at that array position*/
                    return slotMachines[currentLocation.location];
                    //return presentSlotMachine.slot;
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
                    //return presentSlotMachine.slot;
                }/*End of if statement*/
            }/*End of i-loop*/
        },/*end of getSearchSlotMachine method*/
        
        /*return the total count of the slot machines*/
        getTotalCountOfSlotMachines: function(){
            return slotMachines.length;
        }
        
    }/*End of main Return*/
    
    
});