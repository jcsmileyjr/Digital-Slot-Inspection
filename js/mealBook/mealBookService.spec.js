
    
    /* Unit Test Code */
describe("MealBook Sevice", function() {
    var MealBook, tracker;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the MealBook service before each unit test
    beforeEach(inject(function(_MealBook_) {
        MealBook = _MealBook_;
        MealBook.addMealBookIssue(0);
        tracker = MealBook.getMealBookTracker();
    }));
    
    describe("addMealBookIssue()", function(){
        it('MealBook compliance issue saved to mealBook tracker array when chosen by user', function(){
            expect(tracker[0]).toEqual('Excessive reel tilts');
        });
    });
    
    describe("subtractMealBookIssue()", function(){
        it('Subtract MealBook compliance issue from mealBook tracker array when chosen by user', function(){
            MealBook.subtractMealBookIssue(0);
            tracker = MealBook.getMealBookTracker();
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("getMealBookTracker()", function(){
        it('Saved MealBook compliance issue is a string', function(){
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });
    
    describe("resetMealBookTracker()", function(){
        it('reset the MealBook Tracker array to blacnk', function(){
            MealBook.resetMealBookTracker()
            tracker = MealBook.getMealBookTracker();
            expect(tracker.length).toEqual(0);            
        });
    });    
    
     
});/*End of Slot Machine service Describe block*/