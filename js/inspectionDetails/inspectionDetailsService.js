/*Update the details object to be displayed on the list.html page*/
myApp.factory('InspectionDetails', function () {

    //array to hold a saved slot machine with compliance issues 
    var details = {"casinoName":" choose a casino", "date": "choose a date", "agentName": "who is this"};
    
    return {
        
        /*Update the details object*/
        updateDetails: function(casino, schedule, agent){        
            details.casinoName = casino;
            details.date = schedule;
            details.agentName = agent;        
        },
        
        /*get the details object*/
        getDetails: function(){          
            return details;
        }
    }/*End of main Return*/
    
    
});