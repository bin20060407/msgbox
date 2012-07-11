/**
 * MsgBox - jQuery Plugin
 * version: 1.0 (07/10/2012)
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

		$('body').append(html);
		$('#medesky_msgbox').fadeIn('slow').delay(options.delay).fadeOut('slow');

        // 跳转到指定url
        if(options.url != null) {
            window.location.href = options.url;
        }      

	};

	/* 默认参数 */
	$.msgbox.options = {
		type: 'success',
		msg: '提交成功',
        url: null,
		delay: 1200
	};

})(jQuery);
