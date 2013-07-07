menuSlider
==========

Simple jQuery menu slider

Steps to use the Slider:

		<p>This is a demonstration page for the above JQuery Plugin menuSlider. It creates the sliding bar below the menu item as seen above.</p>
		<p>Download the Plug-In <a href="downloads/menuSlider.zip">here</a></p>
		<p>Steps to use the Slider:</p>
		<ol>
			<li>Wrap your navigation menu in a container as shown:
				<pre><code>
&#60;div id="slideContainer"&#62;
	&#60;ul&#62;
		&#60;li id="selected"&#62;One&#60;/li&#62;
		&#60;li&#62;Two&#60;/li&#62;
		&#60;li&#62;Three&#60;/li&#62;
		&#60;li>Four&#60;/li&#62;
	&#60;/ul&#62;
&#60;/div&#62;
				</code></pre>
			</li>
			<li>Call the menuSlider on the container ({borderthickness, borderstyle, bordercolor}, backgroundcolor, {transistionspeed, transitiontype}):
				<pre><code>
&#60;script&#62;
$("#slideContainer").menuSlider({thickness:"2px",borderStyle:"solid",borderColor:"blue"}, 
				"rgba(0,0,150,0.4)", 
				{speed:".4s", tStyle:"linear"});
&#60;/script&#62;
				</code></pre>				
			</li>
		</ol>
		<p>Note: Ensure to include the JQuery library</p>

		<p>The item the slider returns to has an id of "selected". To switch which item is the current item, change which item has the selected id. I achieved it above by adding a click function in the script (Not included in download) because I wasn't linking to any pages.<p>
