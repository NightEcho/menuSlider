(function($) {

    $.fn.menuSlider = function(sliderProps) {

        var properties = $.extend({
            thickness    : "1px",
            borderStyle  : "solid",
            borderColor  : "black",
            borderSides  : "border-bottom",
            bgColor      : "none",
            bgRadius     : "0",
            speed        : .5,
            tStyle       : "ease"
        }, sliderProps);

        var cssTransitionsSupported = document.body.style.webkitTransition !== undefined || 
                                      document.body.style.MozTransition !== undefined ||
                                      document.body.style.msTransition !== undefined ||
                                      document.body.style.oTransition !== undefined ||
                                      document.body.style.transition !== undefined;

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
                        "-webkit-transition": "left "+properties.speed+"s "+properties.tStyle+
                                              ",width "+properties.speed+"s "+properties.tStyle+
                                              ",height "+properties.speed+"s "+properties.tStyle,
                        "-moz-transition": "left "+properties.speed+"s "+properties.tStyle+
                                           ",width "+properties.speed+"s "+properties.tStyle+
                                           ",height "+properties.speed+"s "+properties.tStyle,
                        "-o-transition": "left "+properties.speed+"s "+properties.tStyle+
                                         ",width "+properties.speed+"s "+properties.tStyle+
                                         ",height "+properties.speed+"s "+properties.tStyle,
                        "transition": "left "+properties.speed+"s "+properties.tStyle+
                                      ",width "+properties.speed+"s "+properties.tStyle+
                                      ",height "+properties.speed+"s "+properties.tStyle,
                        "background-color": properties.bgColor,
                        "border-radius": properties.bgRadius
        });

        //Move the Nav slider on hover
        $("li", list).mouseenter(function() {
            var pos = $(this).position();   
            hoverItem = $(this);
            if (cssTransitionsSupported) {
                $(slider).css ({"width": $(this).width(),
                                "height": $(this).height(),
                                "left": pos.left
                });
            }
            else {
                $(slider).stop();
                $(slider).animate({width: $(this).width(),
                                   height: $(this).height(),
                                   left: pos.left
                }, properties.speed*1000);
            }
        });

        //Return the Nav slider on exit
        this.mouseleave(function() {
            if (cssTransitionsSupported) {
                $(slider).css ({"width": $(".selectedMenuItem", list).width(),
                                "height": $(".selectedMenuItem", list).height(),
                                "left": menuItemPosition.left
                });
            }
            else {
                $(slider).stop();
                $(slider).animate({width: $(".selectedMenuItem", list).width(),
                                   height: $(".selectedMenuItem", list).height(),
                                   left: menuItemPosition.left
                }, properties.speed*1000);
            }
        });

        $(window).resize (function() {
            menuItemPosition = $(".selectedMenuItem", list).position(); 
            $(slider).css ({"width": $(".selectedMenuItem", list).width(),
                            "height": $(".selectedMenuItem", list).height()
            });
            if (cssTransitionsSupported) $(slider).css ("left", menuItemPosition.left);
            else $(slider).animate({left:menuItemPosition.left}, 50);
        });

        this.click(function() {
            var link = $("a", hoverItem).attr("href");
            if (link !== undefined) document.location.href = link;

        });
    }
}(jQuery));