FlexSlider
==========
A very flexible jQuery image slider plugin. Easy to customize settings and flexible to use by cloning multiple sliders in one page. Automatically adjust the box size, margin, padding, position (x, y) for each thumbnail image and the wrapper of the slider. All can be done in one setting change with the plugin snippet initialization.

Requirement
-----------
jQuery 1.4 and above


Installation
------------
Hook javascript file within the HEAD tag.

	<script type="text/javascript" src="js/jquery.flexSlider.js"></script>

Embed jQuery snippet which are invoking the plugin with specific HTML elements.

	<script type="text/javascript">
	$(document).ready(function(){
		$('.flexslider1').flexSlider(); // default settings
		$('.flexslider2').flexSlider({
					perItem: 3,
					containerID: 'flexslider-container-demo',
  					sliderID: 'flexslider-slider-demo',
   					duration: 5000,
     				prevLink: 'flex-prev', 
					nextLink: 'flex-next'
		})
	})
	</script>


Browser compatible
------------------
It does work in most latest modern browsers, Firefox 5+, GoogleChrome 10+, Safari 4+, Opera 10+, IE 8+. It may not work well in older IE version.


License
-------
The license is GPL under MIT license. You can use in your commerical or private projects. But, you must credit the plugin author informations and copyright notice in the js file.


Features
--------
* Compatible in most modern browsers and newer IE
* Flexible to use, single or multiple sliders within one page.
* Ability to automatically adjust the box size, margin, padding and position the thumbnail images.


Credits
-------
Powered by Twitter Bootstrap (http://twitter.github.com/bootstrap/) for UI in HTML demo and jQuery (http://jquery.com) for the plugin implementation. Don't remove the credit and leave it in specific files.


Feedbacks
---------
If you found any bugs, please leave your feedbacks here (https://github.com/hashzero/flex-slider)