(function($){
  'use strict';
  $(function(){
  
	  //**Mateialize Mobile Menu**
	  $('.button-collapse').sideNav();


	  //**Scrollspy**
	  $('.scrollspy').scrollSpy();
	  
	  //**Select**
	  $('select').material_select();
	  
	  $('.carousel').carousel();
	  
	  //**Textillate**
	  $('.nametxt').textillate({

			  // enable looping
			  loop: true,
			  minDisplayTime: 7000,
			  
			  in: { effect: 'fadeIn', 
			  		initialDelay: 1000},
			  
			  out: { effect: 'fadeOut'}

			});
			
	  	  $('.subtxt').textillate({

			  // enable looping
			  loop: true,
			  minDisplayTime: 7000,
			  
			  in: { effect: 'fadeIn',
			  		initialDelay: 1000,},
			  
			  out: { effect: 'fadeOut'}

			});
	  
  	}); 
	
	
	// end of document ready
})(jQuery); // end of jQuery name space

	
	
	

	