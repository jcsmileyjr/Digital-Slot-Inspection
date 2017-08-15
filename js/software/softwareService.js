/*a service tracks the Software compliance issues found during the inspection*/
myApp.factory('Software', function () {

    /*array of Software compliance variables used to tracked which compliance variable was found*/
    var software = [{"issue":"EPROM Signature is Rescinded", "found":false}, {"issue":"EPROM Signature is Wrong/Incorrect", "found":false}, {"issue":"Hold Percentage is Incorrect", "found":false}];
    
    //array used to tracked found Software compliance issues
    var softwareTracker= [];
    
    return {
        
        /*function to return the softwareTracker array*/
        getSoftwareTracker: function(){            
            return softwareTracker;
        },
        
        // function to add an Software compliance issue to the SoftwareTracker by corelating the index of the checkbox to the Software array.
        addSoftwareIssue: function(number){
            softwareTracker.push(software[number].issue);  
        },
        
        // function to subtract an Software compliance issue from the SoftwareTracker by corelating the index of the checkbox to the Software array.
        subtractSoftwareIssue: function(number){
            //check if softwareTracker is empty before proceeeding
            if(softwareTracker.length >=0){
                //search the SoftwareTracker array
                for(var i=0;i<softwareTracker.length;i++){
                    //If a software compliance issue matches a elemnt in the softwareTracker array, remove it.
                    if(software[number].issue==softwareTracker[i]){
                        softwareTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the softwareTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetSoftwareTracker: function(){
            softwareTracker = [];
        },
        
        //function to return the list of Softwares compliance issues.
        getSoftware: function(){
            return software;
        },
        
        //Loop through each element in the software array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetSoftwareCheckbox(){                        
            for(var i=0;i<software.length;i++){
                software[i].found = false;
            }
        },
        
        //Loop through each element in the software array. Loop through each element in the tracker array.  If the current tracker element issue mactches the current software issue, then that issue.found property will be update to true. 
        updateSoftwareTracker(tracker){
            for(var i=0;i<software.length;i++){
                for(var j=0;j<tracker.length;j++){
                    if(tracker[j]==software[i].issue){
                        software[i].found = true;
                    }//end of if statement
                }// end of j-for looop
            }// end of i-for loop
        }
        
    }/*End of main Return*/
    
    
});