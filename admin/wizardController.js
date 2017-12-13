myApp.controller('wizardController',  function($scope, $state, SlotMachine, InspectionDetails){
    
    //function use in the start button to process both copy and pasted excel lists to the wizard page textareas into a slot machine json used by the app. 
    $scope.process = function(loc, sn, cName, date, aName){   
        //calls the SlotMachine service method to create a new inspection slotmachines array using location and serial number        
        SlotMachine.createSlotInspection(loc, sn);
        
        // calls the InspectionDetails service method to create the inspection details array using casino name, date, and agent name.        
        InspectionDetails.updateDetails(cName, date, aName);
        
        //move the user the nav page to begin the inspection        
        $state.go('nav');
       
    }// end of process function
    
        
        //list of casinos a user can choose from feature on the wizard page
        $scope.casinos = ["Horseshoe", "Goldstrike", "Roadhouse", "1st Jackpot", "Fitz", "Sam's Town", "Resorts", "Hollywood"];     
    
}); // end of wizardController