menuSlider
==========

Simple jQuery menu slider

Steps to use the Slider:

Wrap your navigation menu in a container as shown:

<pre><code>
&#60;div id="slideContainer"&#62;
	&#60;ul&#62;
		&#60;li class="selectedMenuItem"&#62;One&#60;/li&#62;
		&#60;li&#62;Two&#60;/li&#62;
		&#60;li&#62;Three&#60;/li&#62;
		&#60;li>Four&#60;/li&#62;
	&#60;/ul&#62;
&#60;/div&#62;
</code></pre>

Call the menuSlider on the container ({Border Thickness, Border Style, Border Color, Sides of Border, Background Color, Background Border Radius, Transition Speed, Transition Type}):

<pre><code>
&#60;script&#62;
$("#slideContainer").menuSlider({thickness:"2px",borderStyle:"solid",borderColor:"blue",borderSides:"border-bottom", 
				 bgColor:"rgba(0,0,150,0.4)", bgRadius:"10px", 
				 speed:.4, tStyle:"linear"});
&#60;/script&#62;
</code></pre>				

Note: Ensure to include the JQuery library

The item the slider returns to has an class of "selectedMenuItem". To switch which item is the current item, change which item has the selectedMenuItem class. I achieved it above by adding a click function in the script (Not included in download) because I wasn't linking to any pages.

See Demo <a href="http://www.justenallan.com/menuslider">Here</a>
