
    
    /* Unit Test Code */
describe("MealBook Sevice", function() {
    var MealBook;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the MealBook service before each unit test
    beforeEach(inject(function(_MealBook_) {
        MealBook = _MealBook_;
    }));
    
    describe("Save mealBook issue", function(){
        it('MealBook compliance issue saved to mealBook tracker array when chosen by user', function(){
            MealBook.addMealBookIssue(0);
            var tracker = MealBook.getMealBookTracker();
            expect(tracker[0]).toEqual('Excessive reel tilts');
        });
    });
    
    describe("Subtract saved mealBook issue", function(){
        it('Subtract MealBook compliance issue from mealBook tracker array when chosen by user', function(){
            MealBook.addMealBookIssue(0);
            var tracker = MealBook.getMealBookTracker();
            MealBook.subtractMealBookIssue(0);
            expect(tracker.length).toEqual(0);            
        });
    });
    
    describe("Compliance issue", function(){
        it('Saved MealBook compliance issue is a string', function(){
            MealBook.addMealBookIssue(0);
            var tracker = MealBook.getMealBookTracker();
            expect(tracker[0]).toEqual(jasmine.any(String));            
        });
    });    
     
});/*End of Slot Machine service Describe block*/