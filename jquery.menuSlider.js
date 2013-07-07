(function($) {

    $.fn.menuSlider = function(borderProps,bgProps,tProps) {

        var border = $.extend({
            thickness    : "1px",
            borderStyle  : "solid",
            borderColor  : "black"
        }, borderProps);

        var bgProps = typeof bgProps !== 'undefined' ? bgProps : null;

        var trans = $.extend({
            speed        : ".4s",
            tStyle       : "ease"
        }, tProps);

    	var menuItemPosition = $("#selected").position();

    	var list = $("ul", this);
    	var hoverItem;

        this.append("<div class='menuSlider'></div>");

        $(".menuSlider").css ({"width": $("#selected").width(),
        		       "height": $("#selected").height(),
        		       "position": "absolute",
        		       "left": menuItemPosition.left,
        		       "top": "0",
        		       "pointer-events": "none",
        		       "box-sizing": "border-box",
        		       "cursor": "pointer",
        		       "border-bottom": border.thickness + " " + border.borderStyle + " " + border.borderColor,
			       "-webkit-transition": "left "+trans.speed+" "+trans.tStyle,
			       "-moz-transition": "left "+trans.speed+" "+trans.tStyle,
			       "-o-transition": "left "+trans.speed+" "+trans.tStyle,
			       "transition": "left "+trans.speed+" "+trans.tStyle,
			       "background-color": bgProps
        		     });

        //Move the Nav slider on hover
	$("li", list).mouseenter(function() {
		var pos = $(this).position();	
		hoverItem = $(this);
		$('.menuSlider').css ("left", pos.left);
    	});

	//Return the Nav slider on exit
        this.mouseleave(function() {
		$('.menuSlider').css ("left", menuItemPosition.left);
	});

	$(window).resize (function() {
		menuItemPosition = $("#selected").position();	
	        $(".menuSlider").css ({"width": $("#selected").width(),
	                 	       "height": $("#selected").height(),
	        		       "left": menuItemPosition.left,
	        		     });
	});
	
	//Allows click through to links on IE
	this.click(function() {
		var link = $("a", hoverItem).attr("href");
		if (link !== undefined) document.location.href = link;
	});
    }
    
}(jQuery));
