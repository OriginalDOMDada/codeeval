/* Author: */
/*

( function($){ 

	$.fn.fizzBuzz = function() {
		for (i = 1; i <= 100; i++) {
		    if (i % 3 === 0 && i % 5 === 0){
		        return("FizzBuzz");
		    }
		    else if (i%3 == 0) {
		        return("Fizz");
		        }
		    else if (i%5 == 0){
		        return("Buzz");
		    }
		    else {
		    	return("Uncool");   
			}
		}
	}; 
})(jQuery);




(function( $ ){
	$.fn.fizzBuzzer = function(options) {
		// defaults
		var defaults = {  
      		'fizzInterval' : '3',
      		'fizzText' : 'Fizz',
      		'buzzInterval' : '5',
      		'buzzText' : 'Buzz',
      		'uncoolText' : 'Uncool',
      		'iterations': 16
    	};

		var options = $.extend(defaults, options);  
      
  		return this.each(function() {
  			
  			var container = $(this);  
  			for (var i=1; i <= options.iterations; i++){
    			if (i % (options.fizzInterval*options.buzzInterval) == 0){
       				container.append('<td>'+options.fizzText+options.buzzText+'<td/>');
    			}else if (i % options.fizzInterval == 0){
        			container.append('<td>'+options.fizzText+'<td/>');
    			}else if (i % options.buzzInterval == 0){
      				container.append('<td>'+options.buzzText+'<td/>');
    			}else{
    			container.append('<td>'+options.uncoolText+'<td/>');
    			};
       
	       }
  			
  		});
  				  
 	};  
})(jQuery);*/




( function($){

  $.fn.letsHope = function() {
    return this.each(function() {
      $('tr').append('<td> hi </td>');
    });
  };

})(jQuery);






