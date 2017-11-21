
    
    /* Unit Test Code */
describe("Reels Sevice", function() {
    var Reels, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the Reels service before each unit test
    beforeEach(inject(function(_Reels_) {
        Reels = _Reels_;
        Reels.addReelsIssue(0);
        tracker = Reels.getReelsTracker();
    }));
    
    describe("addReelsIssue()", function(){
        it('Reels compliance issue saved to reels tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('Faded Reel Strips');
        });
    });
    
    describe("subtractReelsIssue()", function(){
        it('Subtract Reels compliance issue from reels tracker array when chosen by user', function(){
            Reels.subtractReelsIssue(0);
            tracker = Reels.getReelsTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getReelsTracker()", function(){
        it('Saved Reels compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetReelsTracker()", function(){
        it('reset the Reels Tracker array to blacnk', function(){
            Reels.resetReelsTracker()
            tracker = Reels.getReelsTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Reels service Describe block*/