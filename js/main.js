/* 
	 00. GUMBY SETTING
	 01. LAZYLOAD SETTING
	 02. TWITTER SETTING
	 03. SLIDER SETTING
	 04. SCROLLTO SETTING
	 05. ISOTOPE PROJECTS
	 06. PROJECTS PORTFOLIO HOVER
	 07. PROJECTS LIGHTBOX

*/


// Gumby is ready to go
Gumby.ready(function() {
	console.log('Gumby is ready to go...', Gumby.debug());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}
});

// Oldie document loaded
Gumby.oldie(function() {

});

/*-----------------------------------------------------------------------------------*/
/*	01. LAZYLOAD SETTING
/*-----------------------------------------------------------------------------------*/
	
$(function() {

$("img").lazyload({
     effect: "fadeIn"  });

});

/*-----------------------------------------------------------------------------------*/
/*	02. TWITTER SETTING
/*-----------------------------------------------------------------------------------*/
	
	  jQuery(function($){
	     
        $("#ticker").tweet({
          username: "Supview", /*Enter your Twitter username inside quotes eg: web3canvas, barackobama etc*/
          modpath: 'http://baribal.be/mountainhead/twitter/', /* director of the twitter folder : ABSOLUTLY DIRECT LINK OF YOUR TWITTER FOLDER */
          page: 1, /*How many tweets to show at a time, You need to increase #ticker height if you increased this value*/
          avatar_size: null, /*If you want to show your twitter avatar, just change null to avatar size you needed eg: 32, 50, 80 etc..*/
          count: 5, /*Total counts of tweets. */
          loading_text: "Bringing latest tweets..." /*Loading text*/
        })      
        
        });
        
        
	$(document).ready(function() {
		
		var ul = $(this).find(".tweet_list");
		var ticker = function() {
		setTimeout(function() {
		var top = ul.position().top;
		var h = ul.height();
		var incr = (h / ul.children().length);
		var newTop = top - incr;
		if (h + newTop <= 0) newTop = 0;
		ul.animate( {top: newTop}, 500 );
		ticker();
		}, 7000);
		};
		ticker();
		}); 

	

/*-----------------------------------------------------------------------------------*/
/*	03. SLIDER SETTING
/*-----------------------------------------------------------------------------------*/


$(document).ready(function(){
    var options = {
        nextButton: true,
        prevButton: true,
        pagination: false,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true,
        preloadTheseFrames: [1],
    };
    
    var mySequence = $("#sequence").sequence(options).data("sequence");
});	
	
/*-----------------------------------------------------------------------------------*/
/*	04. SCROLL TO SETTING
/*-----------------------------------------------------------------------------------*/

$('#nav a').click(function(e){
    $('html,body').scrollTo(this.onBefore, this.hash);
    e.preventDefault();
});



/*-----------------------------------------------------------------------------------*/
/*	05. ISOTOPE PROJECTS
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('#projects_grid .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
    });

    $('.filter li a').click(function () {

        $('.filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/*	06. PROJECTS PORTFOLIO HOVER
/*-----------------------------------------------------------------------------------*/
$(function () {
    $(' .items > li, .frame > a ').each(function () {
        $(this).hoverdir();
    });
});

/*-----------------------------------------------------------------------------------*/
/* 07. PROJECTS LIGHTBOX
/*-----------------------------------------------------------------------------------*/

    jQuery(document).ready(function($){
      $('.lightbox').lightbox();
    });

