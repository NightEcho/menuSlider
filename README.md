menuSlider
==========

Simple jQuery menu slider

Steps to use the Slider:

Wrap your navigation menu in a container as shown:

<div id="slideContainer">
  <ul>
		<li id="selected">One</li>
		<li>Two</li>
		<li>Three</li>
		<li>Four</li>
	</ul>
</div>
				
Call the menuSlider on the container ({borderthickness, borderstyle, bordercolor}, backgroundcolor, {transistionspeed, transitiontype}):

<script>
$("#slideContainer").menuSlider({thickness:"2px",borderStyle:"solid",borderColor:"blue"}, 
				"rgba(0,0,150,0.4)", 
				{speed:".4s", tStyle:"linear"});
</script>
				
Note: Ensure to include the JQuery library

The item the slider returns to has an id of "selected". To switch which item is the current item, change which item has the selected id. I achieved it above by adding a click function in the script (Not included in download) because I wasn't linking to any pages.
