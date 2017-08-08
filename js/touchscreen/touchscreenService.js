/*a service tracks the Touchscreen compliance issues found during the inspection*/
myApp.factory('Touchscreen', function () {

    /*array of Touchscreen compliance variables used to tracked which compliance variable was found*/
    var touchscreen = [{"issue":"No PayTable", "found":false}, {"issue":"Out", "found":false}, {"issue":"Cracked", "found":false}, {"issue":"Loose", "found":false}];
    
    //array used to tracked found Touchscreen compliance issues
    var touchscreenTracker= [];
    
    return {
        
        /*function to return the touchscreenTracker array*/
        getTouchscreenTracker: function(){            
            return touchscreenTracker;
        },
        
        // function to add an Touchscreen compliance issue to the TouchscreenTracker by corelating the index of the checkbox to the Touchscreen array.
        addTouchscreenIssue: function(number){
            touchscreenTracker.push(touchscreen[number].issue);  
        },
        
        // function to subtract an Touchscreen compliance issue from the TouchscreenTracker by corelating the index of the checkbox to the Touchscreen array.
        subtractTouchscreenIssue: function(number){
            //check if touchscreenTracker is empty before proceeeding
            if(touchscreenTracker.length >=0){
                //search the TouchscreenTracker array
                for(var i=0;i<touchscreenTracker.length;i++){
                    //If a touchscreen compliance issue matches a elemnt in the touchscreenTracker array, remove it.
                    if(touchscreen[number].issue==touchscreenTracker[i]){
                        touchscreenTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the touchscreenTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetTouchscreenTracker: function(){
            touchscreenTracker = [];
        },
        
        //function to return the list of Touchscreens compliance issues.
        getTouchscreen: function(){
            return touchscreen;
        },
        
        //Loop through each element in the touchscreen array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetTouchscreenCheckbox(){                        
            for(var i=0;i<touchscreen.length;i++){
                touchscreen[i].found = false;
            }
        }
        
    }/*End of main Return*/
    
    
});