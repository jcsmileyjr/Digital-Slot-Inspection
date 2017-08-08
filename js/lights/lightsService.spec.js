
    
    /* Unit Test Code */
describe("Lights Sevice", function() {
    var Lights, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the Lights service before each unit test
    beforeEach(inject(function(_Lights_) {
        Lights = _Lights_;
        Lights.addLightsIssue(0);
        tracker = Lights.getLightsTracker();
    }));
    
    describe("addLightsIssue()", function(){
        it('Lights compliance issue saved to lights tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('Missing');
        });
    });
    
    describe("subtractLightsIssue()", function(){
        it('Subtract Lights compliance issue from lights tracker array when chosen by user', function(){
            Lights.subtractLightsIssue(0);
            tracker = Lights.getLightsTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getLightsTracker()", function(){
        it('Saved Lights compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetLightsTracker()", function(){
        it('reset the Lights Tracker array to blacnk', function(){
            Lights.resetLightsTracker()
            tracker = Lights.getLightsTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Lights service Describe block*/