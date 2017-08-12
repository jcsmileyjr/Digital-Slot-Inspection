/*a service tracks the Reels compliance issues found during the inspection*/
myApp.factory('Reels', function () {

    /*array of Reels compliance variables used to tracked which compliance variable was found*/
    var reels = [{"issue":"Faded Reel Strips", "found":false}, {"issue":"Taped", "found":false}, {"issue":"Wrong Reels", "found":false}];
    
    //array used to tracked found Reels compliance issues
    var reelsTracker= [];
    
    return {
        
        /*function to return the reelsTracker array*/
        getReelsTracker: function(){            
            return reelsTracker;
        },
        
        // function to add an Reels compliance issue to the ReelsTracker by corelating the index of the checkbox to the Reels array.
        addReelsIssue: function(number){
            reelsTracker.push(reels[number].issue);  
        },
        
        // function to subtract an Reels compliance issue from the ReelsTracker by corelating the index of the checkbox to the Reels array.
        subtractReelsIssue: function(number){
            //check if reelsTracker is empty before proceeeding
            if(reelsTracker.length >=0){
                //search the ReelsTracker array
                for(var i=0;i<reelsTracker.length;i++){
                    //If a reels compliance issue matches a elemnt in the reelsTracker array, remove it.
                    if(reels[number].issue==reelsTracker[i]){
                        reelsTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the reelsTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetReelsTracker: function(){
            reelsTracker = [];
        },
        
        //function to return the list of Reelss compliance issues.
        getReels: function(){
            return reels;
        },
        
        //Loop through each element in the reels array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetReelsCheckbox(){                        
            for(var i=0;i<reels.length;i++){
                reels[i].found = false;
            }
        }
        
    }/*End of main Return*/
    
    
});