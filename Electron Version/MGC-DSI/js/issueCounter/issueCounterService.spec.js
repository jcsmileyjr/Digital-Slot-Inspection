
    
    /* Unit Test Code */
describe("IssueCounter Sevice:", function() {
    var IssueCounter, issueCount;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the IssueCounter service before each unit test
    beforeEach(inject(function(_IssueCounter_) {
        IssueCounter = _IssueCounter_;
    }));
    
    describe("getCurrentCount()", function(){
        
        // setup the issue counter object from the IssueCounter service to test..
        beforeEach(function() {
            issueCount = IssueCounter.getCurrentCount();
        }); 
        
        it('retrieves the count property of the issueCounter object at startup', function(){            
            expect(issueCount).toEqual(0);
        });
        
        it('returns a number when called', function(){
            expect(issueCount).toEqual(jasmine.any(Number));
        });        
    });
    
    describe("addToCount()", function(){
        it('Increment the issueCount count property by one when called', function(){
            IssueCounter.addToCount();
            issueCount = IssueCounter.getCurrentCount();
            expect(issueCount).toEqual(1);
        });
    });
    
    describe("subtractFromCount()", function(){
        it('Decrease the issueCount.count property by one when called', function(){
            IssueCounter.addToCount();
            //IssueCounter.addToCount();
            IssueCounter.subtractFromCount();
            issueCount = IssueCounter.getCurrentCount();
            expect(issueCount).toEqual(0);
        }); 
        
        it('Does not decrease below 0 when called or cannot be a negative', function(){
            IssueCounter.subtractFromCount();
            IssueCounter.subtractFromCount();
            IssueCounter.subtractFromCount();
            issueCount = IssueCounter.getCurrentCount();
            expect(issueCount).not.toBeLessThan(0);
        });        
    });
    
    describe("resetCount()", function(){
        it('Reset the count to 0', function(){
            IssueCounter.addToCount();
            IssueCounter.resetCount();
            issueCount = IssueCounter.getCurrentCount();
            expect(issueCount).toEqual(0);
        });
    });    
     
});/*End of Slot Machine service Describe block*/