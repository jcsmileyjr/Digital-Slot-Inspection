/*a service that tracks the showLowerHalf and showUpperHalf shared varibles*/
myApp.factory('ComplianceSection', function () {

    /*shared variable*/
    var showLowerHalf = {showLowerHalf:false};
    var showUpperHalf = {showUpperHalf:true};

    
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
        },
        /*function to return the showUpperHalf value*/
        getShowUpperHalf: function(){            
            return showUpperHalf.showUpperHalf;
        },
        
        /*set showUpperHalf to true*/
        openUpperHalf: function(){
            showUpperHalf.showUpperHalf = true;
        },
        
        /*set showUpperHalf to false*/
        closeUpperHalf: function(){
            showUpperHalf.showUpperHalf = false;
        }        
    }/*End of main Return*/
    
    
});