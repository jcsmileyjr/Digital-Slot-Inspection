
    
    /* Unit Test Code */
describe("Button Sevice", function() {
    var Button, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the Button service before each unit test
    beforeEach(inject(function(_Button_) {
        Button = _Button_;
        Button.addButtonIssue(0);
        tracker = Button.getButtonTracker();
    }));
    
    describe("addButtonIssue()", function(){
        it('Button compliance issue saved to button tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('Blank Button');
        });
    });
    
    describe("subtractButtonIssue()", function(){
        it('Subtract Button compliance issue from button tracker array when chosen by user', function(){
            Button.subtractButtonIssue(0);
            tracker = Button.getButtonTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getButtonTracker()", function(){
        it('Saved Button compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetButtonTracker()", function(){
        it('reset the Button Tracker array to blacnk', function(){
            Button.resetButtonTracker()
            tracker = Button.getButtonTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Button service Describe block*/