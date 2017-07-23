/*service returns a slot machine based on the location property from the slotMachine array of objects*/
myApp.factory('SlotMachine', function(){

    /*array of slot machine objects*/
    var slotMachines = [{"location":"1-1-1", "serialNumber":100100, "EPROM":"ASDF1000", "holdPercentage":89.1, "completed":false}, {"location":"1-1-2", "serialNumber":100102, "EPROM":"ASDF1002", "holdPercentage":89.1, "completed":false}, {"location":"1-1-3", "serialNumber":100103, "EPROM":"ASDF1003", "holdPercentage":89.1, "completed":false}, {"location":"1-1-4", "serialNumber":100104, "EPROM":"ASDF1004", "holdPercentage":89.1, "completed":false}, {"location":"1-1-5", "serialNumber":100105, "EPROM":"ASDF1005", "holdPercentage":89.1, "completed":false}, {"location":"1-2-1", "serialNumber":100200, "EPROM":"ASDF2001", "holdPercentage":89.1, "completed":false}, {"location":"1-2-2", "serialNumber":100202, "EPROM":"ASDF2002", "holdPercentage":89.1, "completed":false}, {"location":"1-2-3", "serialNumber":100203, "EPROM":"ASDF2003", "holdPercentage":89.1, "completed":false}, {"location":"1-2-4", "serialNumber":100204, "EPROM":"ASDF2004", "holdPercentage":89.1, "completed":false}, {"location":"1-2-5", "serialNumber":100205, "EPROM":"ASDF2005", "holdPercentage":89.1, "completed":false}];
    
    /*object to hold the current slot machine's location*/
    var currentLocation = {"location":4};
    
    return {
        /*function to return the current slot machine object*/
        getCurrentSlotMachine: function(){
            return slotMachines[currentLocation.location];
        },
        
        /*function to return the slot machine before the current slot machine location*/
        getPreviousSlotMachine: function(){
            if(currentLocation.location==0)
                {
                    
                    currentLocation.location= slotMachines.length-1;     
                    return slotMachines[currentLocation.location];
                }
            else 
                {   
                    currentLocation.location= currentLocation.location - 1;
                    return slotMachines[currentLocation.location];
                }
        },
        /*function to return the slot machine before the current slot machine location*/
        getNextSlotMachine: function(){
            if((currentLocation.location + 1) == slotMachines.length)
                {            
                    currentLocation.location= 0;  
                    return slotMachines[currentLocation.location];
                }
            else 
                {
                    currentLocation.location= currentLocation.location + 1;
                    return slotMachines[currentLocation.location];
                }
        },
        
        /*function to return the slot machine from a location chosen by the user*/
        getSearchSlotMachine: function(userLocation){   
            for(var i=0;i<slotMachines.length;i++){
                if(userLocation===slotMachines[i].location){          
                    currentLocation.location = [i];                             
                    return slotMachines[currentLocation.location];
                }/*End of if statement*/
            }/*End of i-loop*/
        }/*end of getSearchSlotMachine method*/
    }/*End of main Return*/
    
    
});