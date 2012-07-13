/**
 * MsgBox - jQuery Plugin
 * version: 1.1 (07/14/2012)
 * @requires jQuery v1.7.2 or later
 *
 * Examples at http://medesky.github.com/msgbox
 * License: http://www.apache.org/licenses/LICENSE-2.0 
 *
 * Copyright 2012 medesky (me@medesky.me)
 */
(function($){

	$.msgbox = function (options) {

		// 将options和默认的参数合并
		options = $.extend( {}, $.msgbox.options, options );

		var html = '<div class="medesky_msgbox_layer_wrap" id="medesky_msgbox" style="display:none">'+
			'<span class="medesky_msgbox_layer">'+
				'<span class="medesky_ico_'+options.type+'"></span>'+
				options.msg+
				'<span class="medesky_end"></span>'+
			'</span>'+
		'</div>';

		// 判断提示框是否在页面中存在，如果存在则干掉
		if($('#medesky_msgbox')) {
			$('#medesky_msgbox').remove();			
		}

		// 提示框插入到页面
		$('body').append(html);
		$('#medesky_msgbox').fadeIn('slow').delay(options.delay).fadeOut('slow', function(){
			// 提示框显示完之后调用的方法
			if(options.end) {
				options.end();
			}
		});

        // 跳转到指定url
        if(options.url) {
            window.location.href = options.url;
        }

	};

	/* 默认参数 */
	$.msgbox.options = {
		type: 'success',
		msg: '提交成功',
        url: null,
		delay: 1200,
		end: null
	};

})(jQuery);
