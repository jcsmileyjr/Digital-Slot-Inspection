/*Update the details object to be displayed on the list.html page*/
myApp.factory('InspectionDetails', function () {
    
    //Enable the use of the file system module native to node.js use to read,write, or update files on the computer
    var fs = require('fs');
    
    //sets the path to the slotmachine.json (contains slot machine objects) file in the root directory in the client folder.
    var inspectionDetailsData = __dirname +'/inspectionDetails.json';    

    //array to hold a saved slot machine with compliance issues 
    var details = {};
    
    return {
        
        /*Update the details object*/
        updateDetails: function(casino, schedule, agent){        
            details.casinoName = casino;
            details.date = schedule;
            details.agentName = agent;
            
            //transform the completedCount json into a string
            newDetails = JSON.stringify(details);
            
            //writes the new string object to the completedcount.json
            fs.writeFileSync(inspectionDetailsData, newDetails, 'utf8');              
        },
        
        /*get the details object*/
        getDetails: function(){          
            return details;
        },
        
        continueSlotInspectionInspectionDetails: function(){
            
            // use the file system provide by node.js to read the json data into a variable.
            var detailsInfo = fs.readFileSync(inspectionDetailsData);

            //parse the information read into a json format object use to count the completed Slot machines
            details = JSON.parse(detailsInfo);                 
            
        }// end of function
    }/*End of main Return*/
    
    
});