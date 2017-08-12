
    
    /* Unit Test Code */
describe("Locks Sevice", function() {
    var Locks, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the Locks service before each unit test
    beforeEach(inject(function(_Locks_) {
        Locks = _Locks_;
        Locks.addLocksIssue(0);
        tracker = Locks.getLocksTracker();
    }));
    
    describe("addLocksIssue()", function(){
        it('Locks compliance issue saved to locks tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('CPU Locked');
        });
    });
    
    describe("subtractLocksIssue()", function(){
        it('Subtract Locks compliance issue from locks tracker array when chosen by user', function(){
            Locks.subtractLocksIssue(0);
            tracker = Locks.getLocksTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getLocksTracker()", function(){
        it('Saved Locks compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetLocksTracker()", function(){
        it('reset the Locks Tracker array to blacnk', function(){
            Locks.resetLocksTracker()
            tracker = Locks.getLocksTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Locks service Describe block*/