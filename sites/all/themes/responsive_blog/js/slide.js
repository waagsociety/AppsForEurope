/*!
 * jQuery Cycle set up
 * Version: 1.0
 * Description: Featured slider to display in header.php
 */    
  
function resizeSlideShow()
{                                            
	  
	//if we are scrolling and have no remaining space to fill 
	var height1 = jQuery("#content-front").height() + jQuery("#mission-container").height() + jQuery("#twitter-container").height() + jQuery("#bottom-spacer").height() 
	
	//if the whole site fits in the window         
	var height2 = jQuery(window).height() - jQuery("#header-container").height() - jQuery("#navigation-container").height() - jQuery("#logos-container").height();
  	                         
	if(height2 > height1) height1 = height2;  
	                                          
	jQuery(".slide").css("height",height1 + "px"); 
	jQuery("#slideshow").css("height",height1 + "px");
}

jQuery(window).resize(function() { 
	//console.log("res")    
	                
	resizeSlideShow();
	
});   

jQuery(window).scroll(function() { 
	//console.log("res")
	//alert("scroll")
	//jQuery(".slide").css("height","100%"); 
	//jQuery("#slideshow").css("height","110%");
});

jQuery(window).load(function() {
            
	

  var transition_effect = "fade";
  var transition_delay = "5000";
  var transition_duration = "1000";
    
	
  
  /*
	var slide = document.createElement("div");
	slide.className = "slide";
	slide.id = "slide-2";
	console.log(slide)
	document.getElementById("slideshow").appendChild(slide);
  */

	jQuery('#slideshow').cycle({ 
    fx: transition_effect, // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle') 
    next: '#nav-slider .nav-next',    // advances slideshow to next slide 
    prev: '#nav-slider .nav-previous',    // advances slideshow to previous slide
    timeout: transition_delay,  // milliseconds between slide transitions (0 to disable auto advance) 
    speed: transition_duration,  // speed of the transition (any valid fx speed value) 
    pause: 1,     // true to enable "pause on hover" 
    pauseOnPagerHover: 1, // true to pause when hovering over pager link 
    width: '100%',
    containerResize: 0,   // resize container to fit largest slide 
    fit: 1,
    after: function (){
        jQuery(this).parent().css("height", jQuery(this).height());
      }
  });  

  resizeSlideShow();

});
