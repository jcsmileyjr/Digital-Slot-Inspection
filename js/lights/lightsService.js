/*a service tracks the Lights compliance issues found during the inspection*/
myApp.factory('Lights', function () {

    /*array of Lights compliance variables used to tracked which compliance variable was found*/
    var lights = [{"issue":"Missing Candle", "found":false}, {"issue":"Loose Candle", "found":false}, {"issue":"Candle Not Working", "found":false}];
    
    //array used to tracked found Lights compliance issues
    var lightsTracker= [];
    
    return {
        
        /*function to return the lightsTracker array*/
        getLightsTracker: function(){            
            return lightsTracker;
        },
        
        // function to add an Lights compliance issue to the LightsTracker by corelating the index of the checkbox to the Lights array.
        addLightsIssue: function(number){
            lightsTracker.push(lights[number].issue);  
        },
        
        // function to subtract an Lights compliance issue from the LightsTracker by corelating the index of the checkbox to the Lights array.
        subtractLightsIssue: function(number){
            //check if lightsTracker is empty before proceeeding
            if(lightsTracker.length >=0){
                //search the LightsTracker array
                for(var i=0;i<lightsTracker.length;i++){
                    //If a lights compliance issue matches a elemnt in the lightsTracker array, remove it.
                    if(lights[number].issue==lightsTracker[i]){
                        lightsTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the lightsTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetLightsTracker: function(){
            lightsTracker = [];
        },
        
        //function to return the list of Lights compliance issues.
        getLights: function(){
            return lights;
        },
        
        //Loop through each element in the lights array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetLightsCheckbox(){                        
            for(var i=0;i<lights.length;i++){
                lights[i].found = false;
            }
        },
        
        //Loop through each element in the lights array. Loop through each element in the tracker array.  If the current tracker element issue mactches the current lights issue, then that issue.found property will be update to true. 
        updateLightsTracker(tracker){
            for(var i=0;i<lights.length;i++){
                for(var j=0;j<tracker.length;j++){
                    if(tracker[j]==lights[i].issue){
                        lights[i].found = true;
                    }//end of if statement
                }// end of j-for looop
            }// end of i-for loop
        }
        
    }/*End of main Return*/
    
    
});