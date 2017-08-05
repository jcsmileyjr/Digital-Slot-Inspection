
    
    /* Unit Test Code */
describe("Compliance Sevice:", function() {
    var IssueCounter, MealBook, SlotMachine, Compliance; 
    var completedArray, skipArray, compliantArray;
    
    //setup the angular app before each unit test
    beforeEach(module('DSI'));
    
    // setup the IssueCounter service before each unit test
    beforeEach(inject(function(_IssueCounter_, _MealBook_, _SlotMachine_, _Compliance_) {
        IssueCounter = _IssueCounter_;
        MealBook = _MealBook_;
        SlotMachine = _SlotMachine_;
        Compliance = _Compliance_;
    }));
    
    describe("completed())", function(){
        
        // setup the issue counter object from the IssueCounter service to test..
        beforeEach(function() {
            //add a issue to the MealBook tracker array
            MealBook.addMealBookIssue(0);
            
            //Increase the IssueCounter count object
            IssueCounter.addToCount();
            IssueCounter.addToCount();
            
            //Called the completed function and place the array of completed slot machine objects into the variable
            Compliance.completed();
            completedArray = Compliance.getCompliance();            
        }); 
        
        it('saved a completed slot machine as an array', function(){
            expect(completedArray).toEqual(jasmine.any(Object));
        });
        
        it('save a completed slot machine with a MealBook issues', function(){
            expect(completedArray[0].mealBook[0]).toEqual("Excessive reel tilts");
        });
        
        it('save a completed slot machine with a two issues', function(){
            expect(completedArray[0].numberOfIssues).toEqual(2);
        });
        
        it('Mark a saved completed slot machine as completed', function(){
            expect(completedArray[0].completed).toEqual(true);
        });        
    });
    
    describe("skipCompleted())", function(){
        
        // setup the issue counter object from the IssueCounter service to test..
        beforeEach(function() {
            //add a issue to the MealBook tracker array
            MealBook.addMealBookIssue(0);
            
            //Increase the IssueCounter count object
            IssueCounter.addToCount();
            IssueCounter.addToCount();
            
            //Called the completed function and place the array of completed slot machine objects into the variable
            Compliance.skipCompleted();
            skipArray = Compliance.getCompliance();
        }); 
        
        it('saved a completed slot machine as an array', function(){
            expect(skipArray).toEqual(jasmine.any(Object));
        });
        
        it('save a completed slot machine with a MealBook issues', function(){
            expect(skipArray[0].mealBook[0]).toEqual("Excessive reel tilts");
        });
        
        it('save a completed slot machine with a two issues', function(){
            expect(skipArray[0].numberOfIssues).toEqual(2);
        });
        
        it('Mark a saved completed slot machine as Not completed', function(){
            expect(skipArray[0].completed).not.toEqual(true);
        });        
    });    
    
    describe("compliantCompleted())", function(){
        
        // setup the issue counter object from the IssueCounter service to test..
        beforeEach(function() {
            //add a issue to the MealBook tracker array
            MealBook.addMealBookIssue(0);
            
            //Increase the IssueCounter count object
            IssueCounter.addToCount();
            IssueCounter.addToCount();
            
            //Called the completed function and place the array of completed slot machine objects into the variable
            Compliance.compliantCompleted();
            compliantArray = Compliance.getCompliance();
        }); 
        
        it('saved a completed slot machine as an array', function(){
            expect(compliantArray).toEqual(jasmine.any(Object));
        });
        
        it('Mark a saved completed slot machine as completed', function(){
            expect(compliantArray[0].completed).toEqual(true);
        });        
    });      
    

     
});/*End of Slot Machine service Describe block*/