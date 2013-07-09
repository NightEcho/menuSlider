(function($) {

    $.fn.menuSlider = function(borderProps,bgProps,tProps) {

        var border = $.extend({
            thickness    : "1px",
            borderStyle  : "solid",
            borderColor  : "black"
        }, borderProps);

        var bgProps = $.extend({
            bgColor      : null,
            bgRadius     : null
        }, bgProps);

        var trans = $.extend({
            speed        : ".4s",
            tStyle       : "ease"
        }, tProps);

        var list = $("ul", this);
        var hoverItem;

        var menuItemPosition = $(".selectedMenuItem", list).position();

        this.append("<div class='menuSlider'></div>");
        var slider = $(".menuSlider", this);

        $(slider).css ({"width": $(".selectedMenuItem", list).width(),
                        "height": $(".selectedMenuItem", list).height(),
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
                        "background-color": bgProps.bgColor,
                        "border-radius": bgProps.bgRadius
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
