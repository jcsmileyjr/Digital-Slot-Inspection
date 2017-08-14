/*a service that tracks the showLowerHalf shared varible*/
myApp.factory('ComplianceSection', function () {

    /*shared variable*/
    var showLowerHalf = {showLowerHalf:false};

    
    return {
        
        /*function to return the showLowerHalf value*/
        getShowLowerHalf: function(){            
            return showLowerHalf.showLowerHalf;
        },
        
        /*set showLowerHalf to true*/
        openLowerHalf: function(){
            showLowerHalf.showLowerHalf = true;
        },
        
        /*set showLowerHalf to false*/
        closeLowerHalf: function(){
            showLowerHalf.showLowerHalf = false;
        }        
    }/*End of main Return*/
    
    
});