(function($){

	$.fn.jSlider = function(options) {
	
		var defaults = {
						perItem: 4,
						auto:	false,
						direction: 'horizontal',
						showControl: false,
						prevLink:	's-prev',
						nextLink:	's-next',
						duration:	400,
						pause:		5-00,
						wrapperWidth:	'',
						containerID:	'slider-box',
						sliderID:		'slide-layer',
						controlWidth:	'33px'
						};
	
		var options = $.extend(defaults, options);
		var obj = this;
		var steps = 0;
		var distance = 0;
		var dir = 1;
		var current = 0;
		var prevID;
		var nextID;
		
		this.each(function() {
			var items = $('ul li', this);
			initialize(items);
			
			$('#'+prevID, this).click(function(){
				slideIt(1);
			})
			
			$('#'+nextID, this).click(function(){
				slideIt(-1);
			})
		})
		
		function initialize(items) {
			steps = items.length - options.perItem;
			if(options.direction == 'horizontal') {
				$(items).css({float: 'left', display: 'inline'});
			}
			
			// per item is 1 and it takes full width of the visible area
			if(options.perItem <= 1) {
				itemWidth = $(obj).width();				
				$(items).addClass('full').css('width', itemWidth+'px').css('float', 'left');
				steps = items.length-1;
			}
			
			addController(); // add the controller (prev, next)
			
			adjustWrapper(items); // adjust the slider wrapper (initialize the total width, set-up the position (x,y) depends on the box model of items and per items within visible slider area
			
			distance = (options.direction == 'horizontal') ? $(items[0]).outerWidth(true) : $(items[0]).outerHeight(true); // distance of the slide
		}
		
		function adjustWrapper(items) {
			var wrapper = $('<div class="'+options.containerID+'"></div>');
			$(obj).append(wrapper);
			$('ul', obj).appendTo(wrapper);
			
			$(items).css('height', $(items[0]).outerHeight(true));
			
			if(options.direction == 'horizontal') {
				$('.'+options.containerID, obj).css({overflow: 'hidden', margin: '0 '+options.controlWidth});
			}
			else {
				$('.'+options.containerID, obj).css({overflow: 'hidden', margin: options.controlWidth+' 0'});
			}
			
			var margins = Math.floor(($('.'+options.containerID).width()-($(items[0]).outerWidth(true)*options.perItem))/(options.perItem-1));
			
			if(options.perItem > 1) {
				$(items).css('marginRight', margins+'px');
			}
			
			var totalWidth = (options.direction == 'horizontal') ? ($(items[0]).outerWidth(true) * items.length) : $(items[0]).outerWidth(true);
			var totalHeight = (options.direction == 'horizontal') ? $(items[0]).outerHeight(true) : ($(items[0]).outerHeight(true) * items.length);
			
			$('.'+options.containerID).css('height', $(items[0]).outerHeight(true)+'px');
			
			$('ul', obj).css({width: totalWidth +'px',
						height: totalHeight +'px'
					});
		}
		
		function addController() {
			prevID = (options.direction == 'horizontal') ? 'h-'+options.prevLink : 'v-'+options.prevLink;
			nextID = (options.direction == 'horizontal') ? 'h-'+options.nextLink : 'v-'+options.nextLink;
			
			var prevButton = $('<span id="'+prevID+'" class="s-controller prev-inactive"></span>');
			
			var nextButton = $('<span id="'+nextID+'" class="s-controller"></span>');
			
			if(options.direction != 'horizontal') {
				$(prevButton).addClass('prev-vertical').css('height', options.controlWidth).appendTo($(obj));
				$(nextButton).addClass('next-vertical').css('height', options.controlWidth).appendTo($(obj));
			}
			else {
				$(prevButton).addClass('prev-horizontal').css('width', options.controlWidth).appendTo($(obj));
				$(nextButton).addClass('next-horizontal').css('width', options.controlWidth).appendTo($(obj));
			}
		}
	
		function adjust() {
			$('#'+prevID, obj).removeClass('prev-inactive');
			$('#'+nextID, obj).removeClass('next-inactive');
			if(dir > 0 && current < 1) {
				$('#'+prevID, obj).addClass('prev-inactive');
			}
			
			if(dir < 0 && current >= steps) {
				$('#'+nextID, obj).addClass('next-inactive');
			}
		}
		
		function slideIt(d) {
			
			dir = d;
			
			if(d > 0) {
				current = (current >= 1) ? current - d : current;
			}
			else {
				current = (current <= steps - 1) ? current - d  : current;
			}
			
			t = current * distance * -1;
			
			if(options.direction == 'horizontal') {
				$('ul', obj).animate({marginLeft: t}, {queue: false, duration: options.duration, complete: adjust});
			}
			else {
				$('ul', obj).animate({marginTop: t}, {queue: false, duration: options.duration, complete: adjust});
			}
			
		}
	
	}
})(jQuery)