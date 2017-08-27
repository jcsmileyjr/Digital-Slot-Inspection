
    
    /* Unit Test Code */
describe("Slot Machine Sevice: currentLocation object", function() {
    var SlotMachine, currentSlotMachine, count;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the SlotMachine service before each unit test
    beforeEach(inject(function(_SlotMachine_) {
        SlotMachine = _SlotMachine_;
    }));
    
    // setup the SlotMachine service before each unit test. Starts off at position 4 of the slotMachines array, location (1-1-5).
    beforeEach(function() {
        currentSlotMachine = SlotMachine.getCurrentSlotMachine();
    });
    
    describe("updateSlotMachineCompleted()", function(){
        it('Change the current slot machine completed property from incomplete to Completed', function(){
            SlotMachine.updateSlotMachineCompleted();
            expect(currentSlotMachine.completed).toEqual('Completed');
        });
    });
    
    describe("updateSlotMachineSkip()", function(){
        it('Change the current slot machine completed property from incomplete to Skip', function(){
            SlotMachine.updateSlotMachineSkip();
            expect(currentSlotMachine.completed).toEqual('Skip');
        });
    });    
    
    describe("getNextSlotMachine()", function(){
        it('Change from the current slot machine location (slotMachines[4]) to the next location (slotMachines[5])', function(){
            currentSlotMachine = SlotMachine.getNextSlotMachine();
            expect(currentSlotMachine.location).toEqual('1-2-1');
        });
    });
    
    describe("getPreviousSlotMachine()", function(){
        it('Change from the current slot machine location (slotMachines[4]) to the previous location (slotMachines[3])', function(){
            currentSlotMachine = SlotMachine.getPreviousSlotMachine();
            expect(currentSlotMachine.location).toEqual('1-1-4');
        });
    });
    
    describe("getSearchSlotMachine()", function(){
        it('Search and change to a user chosen location from the current slot machine location (slotMachines[4]))', function(){
            currentSlotMachine = SlotMachine.getSearchSlotMachine('1-2-4');
            expect(currentSlotMachine.location).toEqual('1-2-4');
        });          
    });
        
    describe("getTotalCountOfSlotMachines()", function(){
        it('return the total count of slot machines at start up', function { 
           count = SlotMachine.getTotalCountOfSlotMachines();
            expect(count).toEqual(10);
        });
    });

    describe("Slot Inspection Completion", function(){ 
        
        it('the inspection completion percentage return is a number.', function(){
            var progress = SlotMachine.getInspectionCompletion();
            expect(progress).toEqual(jasmine.any(Number));
        });

        it('The inspection completion percentage change by a positive number', function(){
            SlotMachine.updateCompletedSlotMachineCount();
            var progress = SlotMachine.getInspectionCompletion();
            expect(progress).toEqual(10);
        });       
    });/*End of "Bugs found during Navigation describe block"*/
    
    describe("Bugs found during Navigation", function(){        
        it('Slot Machine location changed from the last slot machine location (slotMachines[9]) to the first slot machine location (slotMachines[1]))', function(){
            currentSlotMachine = SlotMachine.getSearchSlotMachine('1-2-5');
            currentSlotMachine = SlotMachine.getNextSlotMachine();
            expect(currentSlotMachine.location).toEqual('1-1-1');
        });

        it('Slot Machine location changed from the first slot machine location (slotMachines[0]) to the last slot machine location (slotMachines[9]))', function(){
            currentSlotMachine = SlotMachine.getSearchSlotMachine('1-1-1');
            currentSlotMachine = SlotMachine.getPreviousSlotMachine();
            expect(currentSlotMachine.location).toEqual('1-2-5');
        });         
    });/*End of "Bugs found during Navigation describe block"*/
     
});/*End of Slot Machine service Describe block*/