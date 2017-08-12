
    
    /* Unit Test Code */
describe("Software Sevice", function() {
    var Software, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the Software service before each unit test
    beforeEach(inject(function(_Software_) {
        Software = _Software_;
        Software.addSoftwareIssue(0);
        tracker = Software.getSoftwareTracker();
    }));
    
    describe("addSoftwareIssue()", function(){
        it('Software compliance issue saved to software tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('EPROM Signature is Incorrect');
        });
    });
    
    describe("subtractSoftwareIssue()", function(){
        it('Subtract Software compliance issue from software tracker array when chosen by user', function(){
            Software.subtractSoftwareIssue(0);
            tracker = Software.getSoftwareTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getSoftwareTracker()", function(){
        it('Saved Software compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetSoftwareTracker()", function(){
        it('reset the Software Tracker array to blacnk', function(){
            Software.resetSoftwareTracker()
            tracker = Software.getSoftwareTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Software service Describe block*/