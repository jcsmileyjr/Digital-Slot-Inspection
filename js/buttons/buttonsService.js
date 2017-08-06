/*a service tracks the Button compliance issues found during the inspection*/
myApp.factory('Button', function () {

    /*array of Button compliance variables used to tracked which compliance variable was found*/
    var button = [{"issue":"Blank Button", "found":false}, {"issue":"Hand-written Label", "found":false}, {"issue":"Cracked", "found":false}, {"issue":"Loose", "found":false}, {"issue":"Button in Wrong Spot", "found":false}, {"issue":"Missing Button", "found":false}];
    
    //array used to tracked found Button compliance issues
    var buttonTracker= [];
    
    return {
        
        /*function to return the buttonTracker array*/
        getButtonTracker: function(){            
            return buttonTracker;
        },
        
        // function to add an Button compliance issue to the ButtonTracker by corelating the index of the checkbox to the Button array.
        addButtonIssue: function(number){
            buttonTracker.push(button[number].issue);  
        },
        
        // function to subtract an Button compliance issue from the ButtonTracker by corelating the index of the checkbox to the Button array.
        subtractButtonIssue: function(number){
            //check if buttonTracker is empty before proceeeding
            if(buttonTracker.length >=0){
                //search the ButtonTracker array
                for(var i=0;i<buttonTracker.length;i++){
                    //If a button compliance issue matches a elemnt in the buttonTracker array, remove it.
                    if(button[number].issue==buttonTracker[i]){
                        buttonTracker.splice([i], 1);
                    }
                }
            }
        },
        
        //Function to reset the buttonTracker to the original blank array. This is used when the user navigate to a new slot machine.
        resetButtonTracker: function(){
            buttonTracker = [];
        },
        
        //function to return the list of Mealbook compliance issues.
        getButton: function(){
            return button;
        },
        
        //Loop through each element in the button array resetting each element issue's found property to false. This is use when a user save and continue to another slot machine.
        resetButtonCheckbox(){                        
            for(var i=0;i<button.length;i++){
                button[i].found = false;
            }
        }
        
    }/*End of main Return*/
    
    
});