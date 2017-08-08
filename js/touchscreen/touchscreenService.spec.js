
    
    /* Unit Test Code */
describe("Touchscreen Sevice", function() {
    var Touchscreen, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the Touchscreen service before each unit test
    beforeEach(inject(function(_Touchscreen_) {
        Touchscreen = _Touchscreen_;
        Touchscreen.addTouchscreenIssue(0);
        tracker = Touchscreen.getTouchscreenTracker();
    }));
    
    describe("addTouchscreenIssue()", function(){
        it('Touchscreen compliance issue saved to touchscreen tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('No PayTable');
        });
    });
    
    describe("subtractTouchscreenIssue()", function(){
        it('Subtract Touchscreen compliance issue from touchscreen tracker array when chosen by user', function(){
            Touchscreen.subtractTouchscreenIssue(0);
            tracker = Touchscreen.getTouchscreenTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getTouchscreenTracker()", function(){
        it('Saved Touchscreen compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetTouchscreenTracker()", function(){
        it('reset the Touchscreen Tracker array to blacnk', function(){
            Touchscreen.resetTouchscreenTracker()
            tracker = Touchscreen.getTouchscreenTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Touchscreen service Describe block*/