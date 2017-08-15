/*a service tracks the Locks compliance issues found during the inspection*/
myApp.factory('Locks', function () {

    /*array of Locks compliance variables used to tracked which compliance variable was found*/
    var locks = [{"issue":"CPU Locked", "found":false}, {"issue":"Belly Door Locked", "found":false}, {"issue":"BV Box Locked", "found":false}, {"issue":"Progressive Controller Board Secured", "found":false}, {"issue":"No Funds Visible or Loose", "found":false}];
    
    //array used to tracked found Locks compliance issues
    var locksTracker= [];
    
    return {
        
        /*function to return the locksTracker array*/
        getLocksTracker: function(){            
            return locksTracker;
        },
        
        // function to add an Locks compliance issue to the LocksTracker by corelating the index of the checkbox to the Locks array.
        addLocksIssue: function(number){
            locksTracker.push(locks[number].issue);  
        },
        
        // function to subtract an Locks compliance issue from the LocksTracker by corelating the index of the checkbox to the Locks array.
        subtractLocksIssue: function(number){
            //check if locksTracker is empty before proceeeding
            if(locksTracker.length >=0){
                //search the LocksTracker array
                for(var i=0;i<locksTracker.length;i++){
                    //If a locks compliance issue matches a elemnt in the locksTracker array, remove it.
                    if(locks[number].issue==locksTracker[i]){
                        locksTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the locksTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetLocksTracker: function(){
            locksTracker = [];
        },
        
        //function to return the list of Lockss compliance issues.
        getLocks: function(){
            return locks;
        },
        
        //Loop through each element in the locks array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetLocksCheckbox(){                        
            for(var i=0;i<locks.length;i++){
                locks[i].found = false;
            }
        },
        
        //Loop through each element in the locks array. Loop through each element in the tracker array.  If the current tracker element issue mactches the current locks issue, then that issue.found property will be update to true. 
        updateLocksTracker(tracker){
            for(var i=0;i<locks.length;i++){
                for(var j=0;j<tracker.length;j++){
                    if(tracker[j]==locks[i].issue){
                        locks[i].found = true;
                    }//end of if statement
                }// end of j-for looop
            }// end of i-for loop
        }
        
    }/*End of main Return*/
    
    
});