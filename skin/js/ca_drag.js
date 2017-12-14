
// JavaScript Document
(function(){
	$.fn.dragObj = function(options){
		dft		=	{
			obj		: this,					//当前拖动对象
			disX	: 0,					//获取鼠标第一次点击对象的x坐标
			disY	: 0,					//获取鼠标第一次点击对象的y坐标
			w		: $(window).width(),	//可以拖动的范围的宽度
			h		: $(window).height()	//可以拖动的范围的高度
		}

		var ops = $.extend(dft,options);
		var ele = $(ops.obj);
		var w = $("#intro_img li").eq(0).width();
		var len =$("#intro_img li").size();
		var imgWrap = $("#intro_img");
		var img = imgWrap.children("li")
		//var timeIcon = $("#timeIcon").children(".time");
		var percent = (998-95)/((len-4)*w+3*15); 
		
		$(ops.obj).mousedown(function(event){
			
			var event = event || window.event;
			ops.disX =  event.clientX - $(ops.obj).position().left;
			ops.disY =  event.clientY - $(ops.obj).position().top;
			
			$(document).mousemove(function(event){
				
				var event 	= event || window.event;
				var iL 		= event.clientX - ops.disX;
				var iT		= event.clientY - ops.disY;
				var maxL 	= ops.w - $(ops.obj).width();
				var maxT 	= ops.h - $(ops.obj).height();				
				iL <= 2 && (iL = 2);
				//iT <= 0 && (iT = 0);
				iL >= ops.w-2 && (iL = ops.w-2);
				//iT >= maxT && (iT = maxT);
								
				startMove($("#intro_img").get(0),{"left":-iL/percent});	
				$(ops.obj).css({left:iL});
				
				return false;
			});
			
			
			$(document).mouseup(function(){
				$(document).unbind("mousemove");
				$(document).unbind("mouseup");
				
				ele[0].releaseCapture && ele[0].releaseCapture()
			});
			ele[0].setCapture && ele[0].setCapture();		
			return false
		
		}); 
		
	}
})(jQuery);