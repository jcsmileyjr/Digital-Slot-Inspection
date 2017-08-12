describe('navController', function(){
  var scope, ctrl, SlotMachine, currentSlotMachine;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));    
    
    // setup the SlotMachine service before each unit test
    beforeEach(inject(function(_SlotMachine_) {
        SlotMachine = _SlotMachine_;
    }));    
    
    // setup or inputs the SlotMachine service before each unit test. Starts off at position 4 of the slotMachines array, location (1-1-5).
    beforeEach(function() {
        currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    });    

    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        ctrl = $controller('navController', { $scope: scope });
    }));
    
    describe('getCurrentSlotMachine', function(){
        it('Return a slot machine object to the currentSlotMachine variable', function() {        
            expect(currentSlotMachine).toEqual(jasmine.any(Object));
        });        
    });    

    describe('setSlotMachine()', function(){
        // call the setSlotMachine function to set up all outputs from the navController.
        beforeEach(function() {
            scope.setSlotMachine(currentSlotMachine);
        });          
        
        it('Display the location of the current slot machine', function() {
            //scope.setSlotMachine(currentSlotMachine);
            expect(scope.location).toBe("1-1-5");
        });

        it('Display the serial number of the current slot machine', function() {
            //scope.setSlotMachine(currentSlotMachine);
            expect(scope.serialNumber).toBe(100105);
        });
        
        it('Display the completed status of the current slot machine', function() {
            //scope.setSlotMachine(currentSlotMachine);
            expect(scope.completed).toBe("Incomplete");
        });        
        /*
        xit('Display the EPROM signature of the current slot machine)', function(){
            expect(scope.EPROM).toBe("ASDF1005");
        });
        
        xit('Display the hold percentage of the current slot machine)', function(){
            expect(scope.holdPercentage).toBe(89.1);
        });
        */
    });
    
    describe('setStatus()', function(){
        // call the setSlotMachine function to set up all outputs from the navController.
        beforeEach(function() {
            scope.setSlotMachine(currentSlotMachine);
        });             
        it('Display the Incomplete status message', function() {        
            expect(scope.status.toBe("NOT Been Inspected");
        });        
    });        

    
}); /*End of main navController Describe block*/   