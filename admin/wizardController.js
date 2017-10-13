myApp.controller('wizardController',  function($scope, $state, SlotMachine, InspectionDetails){
    
    //function use in the start button to process both copy and pasted excel lists to the wizard page textareas into a slot machine json used by the app. 
    $scope.process = function(loc, sn, cName, date, aName){        
        SlotMachine.createSlotInspection(loc, sn);
        InspectionDetails.updateDetails(cName, date, aName);
console.log("wizardController " + cName);
        $state.go('nav');
    }
    
    
    
});//end of buttonController