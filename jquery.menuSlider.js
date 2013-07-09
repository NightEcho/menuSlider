(function($) {

    $.fn.menuSlider = function(sliderProps) {

        var properties = $.extend({
            thickness    : "1px",
            borderStyle  : "solid",
            borderColor  : "black",
            borderSides  : "border-bottom",
            bgColor      : null,
            bgRadius     : null,
            speed        : ".4s",
            tStyle       : "ease"
        }, sliderProps);

        var list = $("ul", this);
        var hoverItem;

        var menuItemPosition = $(".selectedMenuItem", list).position();

        this.append("<div class='menuSlider'></div>");
        var slider = $(".menuSlider", this);

        $(slider).css(properties.borderSides, properties.thickness + " " + properties.borderStyle + " " + properties.borderColor);

        $(slider).css ({"width": $(".selectedMenuItem", list).width(),
                        "height": $(".selectedMenuItem", list).height(),
                        "position": "absolute",
                        "left": menuItemPosition.left,
                        "top": "0",
                        "pointer-events": "none",
                        "box-sizing": "border-box",
                        "cursor": "pointer",
                        "-webkit-transition": "left "+properties.speed+" "+properties.tStyle,
                        "-moz-transition": "left "+properties.speed+" "+properties.tStyle,
                        "-o-transition": "left "+properties.speed+" "+properties.tStyle,
                        "transition": "left "+properties.speed+" "+properties.tStyle,
                        "background-color": properties.bgColor,
                        "border-radius": properties.bgRadius
        });

        //Move the Nav slider on hover
        $("li", list).mouseenter(function() {
            var pos = $(this).position();   
            hoverItem = $(this);
            $(slider).css ("left", pos.left);
        });

        //Return the Nav slider on exit
        this.mouseleave(function() {
            $(slider).css ("left", menuItemPosition.left);
        });

        $(window).resize (function() {
            menuItemPosition = $(".selectedMenuItem", list).position(); 
            $(slider).css ({"width": $(".selectedMenuItem", list).width(),
                            "height": $(".selectedMenuItem", list).height(),
                            "left": menuItemPosition.left,
            });
        });

        this.click(function() {
            var link = $("a", hoverItem).attr("href");
            if (link !== undefined) document.location.href = link;
        });

    }

}(jQuery));