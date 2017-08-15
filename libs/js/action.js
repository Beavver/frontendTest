 Notify = {
	TYPE_INFO: 0,
	TYPE_SUCCESS: 1,
	TYPE_WARNING: 2,
	TYPE_DANGER: 3,

	generate: function (aText, aOptHeader, aOptType_int) {
		var lTypeIndexes = [this.TYPE_INFO, this.TYPE_SUCCESS, this.TYPE_WARNING, this.TYPE_DANGER];
		var ltypes = ['alert-info', 'alert-success', 'alert-warning', 'alert-danger'];
		var ltype = ltypes[this.TYPE_INFO];

		if (aOptType_int !== undefined && lTypeIndexes.indexOf(aOptType_int) !== -1) {
			ltype = ltypes[aOptType_int];
		}

		var lText = '';
		if (aOptHeader) {
			lText += "<h4>"+aOptHeader+"</h4>";
		}
		lText += "<p>"+aText+"</p>";
		var lNotify_e = $("<div class='alert "+ltype+"'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>"+lText+"</div>");					

		setTimeout(function () {
			lNotify_e.alert('close');
		}, 5000);
		lNotify_e.appendTo($("#notifies"));
	}
};  




$(document).ready(function(){
	$('.shop_show_more_btn').click(function(){
		var myVar = $(this).parent().children('p#shop_show_more');
		if($(myVar).hasClass('shop_show_more')){
			$(myVar).removeClass('shop_show_more');
		}else{
			$(myVar).addClass('shop_show_more');
		}
	});
	//Function to animate slider captions 
	function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	