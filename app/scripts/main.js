console.log('\'Allo \'Allo!');

  $(document).ready(function(){
  'use strict';
   //**Mateialize Mobile Menu**
	  $('.button-collapse').sideNav();


	  //**Scrollspy**
	  $('.scrollspy').scrollSpy();
	  
	  //**Select**
	  $('select').material_select();
	  
	  $('.carousel').carousel();
	  
	  //**Textillate**
	  $('.tlt').textillate({

			  
			  in: { effect: 'fadeIn', 
			  		initialDelay: 1000},
			  
			  out: { effect: 'fadeOut'}

			});
 
  });
  
  
	