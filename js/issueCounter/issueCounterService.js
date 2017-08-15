/*a service tracks the total number of compliance issues found*/
myApp.factory('IssueCounter', function () {

    
    //object used to keep a count of compliance issues found
    var issueCounter = {count:0};
    
    return {
        
        /*function to return the current count*/
        getCurrentCount: function(){            
            return issueCounter.count;
        },
        
        //function to add one to the current count
        addToCount: function(){
            issueCounter.count = issueCounter.count + 1;
        },
        
        //function to subtract one to the current count
        subtractFromCount: function(){
            if(issueCounter.count >=1)
                issueCounter.count = issueCounter.count - 1;
        },
        
        //reset the issueCounter
        resetCount: function(){
            issueCounter.count = 0;    
        },
        
        //update the current count
        updateCount: function(oldCount){
            issueCounter.count = oldCount;
        }
        
    }/*End of main Return*/
    
    
});