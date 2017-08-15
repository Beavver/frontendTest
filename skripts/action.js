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
			var lNotify_e = $("<div  class='alert "+ltype+"'><button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>×</span></button>"+lText+"</div>");					

			setTimeout(function () {
				lNotify_e.alert('close');
			}, 5000);
			lNotify_e.appendTo($("#notifies"));
		}
	}; 
    $(document).ready(function(){
        $('#chevron_r').click(function(){
            var activeELEM = '';
            if(!$('.tabs ul li.active').next()[0]){
                activeELEM = $('.tabs ul li.active').parent().children().attr('id');
                $('.tabs ul li, .tab-content div').removeClass('active in');
                $('li#'+activeELEM).addClass('active');
                $('.tab-content div#'+activeELEM).addClass('active in');
            }else{
                activeELEM = $('.tabs ul li.active').next().attr('id');
                $('.tabs ul li, .tab-content div').removeClass('active in');
                $('li#'+activeELEM).addClass('active');
                $('.tab-content div#'+activeELEM).addClass('active in');
            }
        });

        $('#chevron_l').click(function(){
            var activeELEM = '';
            if(!$('.tabs ul li.active').prev()[0]){
                activeELEM = $('.tabs ul li.active').parent().children('li').last().attr('id');
                $('.tabs ul li, .tab-content div').removeClass('active in');
                $('li#'+activeELEM).addClass('active');
                $('.tab-content div#'+activeELEM).addClass('active in');
            }else{
                activeELEM = $('.tabs ul li.active').prev().attr('id');
                $('.tabs ul li, .tab-content div').removeClass('active in');
                $('li#'+activeELEM).addClass('active');
                $('.tab-content div#'+activeELEM).addClass('active in');
            }
        });


        $('.calculation_child').click(function(){
			var result = '';
            $.ajax({
                url: './skripts/ajax.php',
                type: 'POST',
                data: {
                    anyVar: 'no matter wat',
                },
                success: function(data){
                    if(data['status'] == true){
						Notify.generate(data['message'], " ", 1);
					}else{
						Notify.generate(data['message'], " ", 3);
					}
                },
                error: function(data){
                    Notify.generate("Что-то пошло совсем не так, раз Вы читаете это сообщение. Вероятнее всего не отрабатывает php скрипт.", "Печалька", 2);
                }
            });	
        });
		
		$('.tabItem').click(function(){
			$('.tabItem, .tab-content div').removeClass('active in');
			$(this).addClass('active');
			var activeELEM = $(this).attr('id');
			$('.tab-content div#'+activeELEM).addClass('active in');
		});
    });