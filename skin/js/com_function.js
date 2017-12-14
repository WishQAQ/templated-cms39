// JavaScript Document
//--------------------
//		   目录
//
//		基于JQuery
//
//--------------------
//
//	1、change():广告图切换效果
//	2、change_tab():选项卡切换效果
//	3、easy_zoom_in():简单的图片点击放大效果
//	4、second():产品页二级分类点击下拉
//	5、second2():产品页二级分类鼠标经过下拉
//	6、potots_001():产品详细页图片右边选择,左边显示
//	7、change_banner():广告图简单切换效果(无按钮版)
//	8、display_001():二级下拉菜单
//	9、change_banner_02():广告图幻灯切换,渐进渐出效果
//	10、change_banner_03():广告图切换效果,点击切换
//	11、MOTION():百叶窗动画效果
//	12、多种广告切换效果
//
///////////////////////////////////////////////////


function change(){
var imglist = $("#img_list").children("li");
var imgpage = $("#img_page").children("li");
var index = 0;
var time = null;

time =	setInterval(function(){
			if(index == imglist.length-1){
				index = 0;
			}else{
				index++;
			}
			
				imglist.eq(index).addClass("show").removeClass("hide").siblings().removeClass("show").addClass("hide");
				imgpage.eq(index).addClass("currents").siblings().removeClass("currents");
		}, 4000);

imgpage.mouseenter(function(){
	clearInterval(time);
	
	index = imgpage.index(this);
	imglist.eq(index).addClass("show").removeClass("hide").siblings().removeClass("show").addClass("hide");
	imgpage.eq(index).addClass("currents").siblings().removeClass("currents");
})
imgpage.mouseout(function(){
	time =	setInterval(function(){
				if(index == imglist.length-1){
					index = 0;
				}else{
					index++;
				}
				
				imglist.eq(index).addClass("show").removeClass("hide").siblings().removeClass("show").addClass("hide");
				imgpage.eq(index).addClass("currents").siblings().removeClass("currents");
			}, 4000);	
})

}//广告图切换效果...浏览shenfei.ly200.net产品页...


function change_tab(){
	var NO1 = $("#NO1");
	var NO2 = $("#NO2");
	var NO3 = $("#NO3");
	var Services = $("#Services");
	var Advantage = $("#Advantage");
	var FAQ = $("#FAQ");
	NO1.click(function(){
		NO1.addClass("prohover").siblings().removeClass("prohover");
		Services.show();
		Advantage.hide();
		FAQ.hide();
		})
	NO2.click(function(){
		NO2.addClass("prohover").siblings().removeClass("prohover");
		Advantage.show()
		Services.hide()
		FAQ.hide()
		})
	NO3.click(function(){
		NO3.addClass("prohover").siblings().removeClass("prohover");
		FAQ.show()
		Services.hide()
		Advantage.hide()
		})	
	}//选项卡切换效果...浏览shenfei.ly200.net产品页...
	

function easy_zoom_in(){
	var zoom_1 = $("#zoom_1");
	var zoom_2 = $("#zoom_2");
	var zoom_3 = $("#zoom_3");
	var zoom_4 = $("#zoom_4");
	
	var blow_1 = $("#blow_1");
	var blow_2 = $("#blow_2");
	var blow_3 = $("#blow_3");
	var blow_4 = $("#blow_4");
	
	var closes_1 = $("#close_1");
	var closes_2 = $("#close_2");
	var closes_3 = $("#close_3");
	var closes_4 = $("#close_4");

	zoom_1.click(function(){
		blow_1.show().siblings().hide();
		})
	closes_1.click(function(){
		blow_1.hide();
		})
		
	zoom_2.click(function(){
		blow_2.show().siblings().hide();
		})
	closes_2.click(function(){
		blow_2.hide();
		})
		
	zoom_3.click(function(){
		blow_3.show().siblings().hide();
		})
	closes_3.click(function(){
		blow_3.hide();
		})
		
	zoom_4.click(function(){
		blow_4.show().siblings().hide();
		})
	closes_4.click(function(){
		blow_4.hide();
		})
}//简单的产品图片放大效果...浏览zanty.ly200.net产品详细页...


function second(){
var stair = $("#stair").children("li");
stair.click(function(){
		$(this).children("dl").toggle().end()
		       .siblings("li").children("dl").hide();
	})	
}//产品页二级分类点击下拉...浏览zanty.ly200.net产品列表页

function second2(){
var stair = $("#stair").children("li");
stair.mouseover(function(){
		$(this).children("dl").toggle().end()
		       .siblings("li").children("dl").hide();
	})	
}//产品页二级分类鼠标经过下拉...浏览zanty.ly200.net产品列表


function potots_001(){
var sImg = $("#sImg").find("li");
var bImg = $("#bImg");
sImg.click(function(){
		var src = $(this).children("img").attr("src");
		bImg.attr("src", src.replace("s_", "500X500_"));
		$(this).css("border","2px solid #f00").siblings().css("border","2px solid #C5C5C5");
	})
}//产品详细页图片右边选择,左边显示...浏览boyuan.ly200.net产品详细页


function change_banner(){
var banner = $("#img_list_1").children("li");
var index = 0;
var time = null;

time =	setInterval(function(){
			if(index == banner.length-1){
				index = 0;
			}else{
				index++;
			}
				banner.eq(index).addClass("show").removeClass("hide").siblings().removeClass("show").addClass("hide");
		}, 3000);

}//广告图切换效果(无按钮版)...浏览shenfei.ly200.net产品页...

function display_001(){
	$(".one").hover(function(){
		$(this).find("div:first").show();
		$(this).addClass("hover").siblings().removeClass("hover");
		$(this).find(".link").css("color","#b60005").siblings().css("color","#4D4D4D");
	},function(){
		$(this).find("div:first").hide();
		$(".one").removeClass("hover");
		$(this).find(".link").css("color","#4D4D4D").siblings().css("color","#4D4D4D");
	})	
}//二级下拉菜单...浏览huachen.ly200.net...


var cur=0;
var tt=imgs=null;

/*$(function(){
		
	imgs=document.getElementById('bannerbox').getElementsByTagName('img');
	tt = setTimeout('change_banner_02()',3000);
	
});

function change_banner_02()
{
	$(imgs[cur]).css({'zIndex':1}).fadeOut();
	cur++
	if(cur>=imgs.length) cur=0;
	$(imgs[cur]).css({'zIndex':2}).fadeIn();
	tt = setTimeout('banner()',10000);
}//广告图幻灯切换...浏览huachen.ly200.net...*/

function change_banner_03(){
var imglist = $("#img_list_1").children("li");
var imgpage = $("#img_page_1").children("li");
var index = 0;
var time = null;

imgpage.click(function(){
	clearInterval(time);
	
	index = imgpage.index(this);
	imglist.eq(index).addClass("show").removeClass("hide").siblings().removeClass("show").addClass("hide");
	imgpage.eq(index).addClass("currents_1").siblings().removeClass("currents_1");
})
}//广告图切换效果...浏览8386.ly200.net产品页...

function MOTION(){ 
	var flashvars = {
		xmlScr: "assets/xml/data.xml"
	};

	var params = {
		bgcolor: "#FFFFFF",
		allowFullScreen: "true",
		wmode: "transparent",
		scale: "noScale", 
		salign: "", 
		menu: "ture"
	};
	var attributes = {};

	swfobject.embedSWF("index.swf", "banner", "950", "425", "8.0.0", false, flashvars, params, attributes);
}//百叶窗动画效果...浏览kelvin.ly200.net首页,数据在assets/xml中修改...

///////////////////////////////////////////////////////////////////
/* SuperSlide1.2 --  Copyright ©2012 大话主席 
 */
(function($){
	$.fn.slide=function(options){
		$.fn.slide.deflunt={
		effect : "fade", //效果 || fade：渐显； || top：上滚动；|| left：左滚动；|| topLoop：上循环滚动；|| leftLoop：左循环滚动；|| topMarquee：上无缝循环滚动；|| leftMarquee：左无缝循环滚动；
		autoPlay:false, //自动运行
		delayTime : 500, //效果持续时间
		interTime : 5000,//自动运行间隔。当effect为无缝滚动的时候，相当于运行速度。
		defaultIndex : 0,//默认的当前位置索引。0是第一个
		titCell:".hd a",//导航元素
		mainCell:".bd",//内容元素的父层对象
		trigger: "click",//触发方式 || mouseover：鼠标移过触发；|| click：鼠标点击触发；
		scroll:1,//每次滚动个数。
		vis:1,//visible，可视范围个数，当内容个数少于可视个数的时候，不执行效果。
		titOnClassName:"on",//当前位置自动增加的class名称
		autoPage:false,//系统自动分页，当为true时，titCell则为导航元素父层对象，同时系统会在titCell里面自动插入分页li元素(1.2版本新增)
		prevCell:".prev",//前一个按钮元素。
		nextCell:".next",//后一个按钮元素。
		mousestop:"0",	//鼠标经过停止 1:鼠标经过停止 || 0:鼠标经过不停止
		};

		return this.each(function() {
			var opts = $.extend({},$.fn.slide.deflunt,options);
			var index=opts.defaultIndex;
			var prevBtn = $(opts.prevCell, $(this));
			var nextBtn = $(opts.nextCell, $(this));
			var navObj = $(opts.titCell, $(this));//导航子元素结合
			var navObjSize = navObj.size();
			var conBox = $(opts.mainCell , $(this));//内容元素父层对象
			var conBoxSize=conBox.children().size();
			var slideH=0;
			var slideW=0;
			var selfW=0;
			var selfH=0;
			var autoPlay = opts.autoPlay;
			var inter=null;//setInterval名称 
			var oldIndex = index;

			if(conBoxSize<opts.vis) return; //当内容个数少于可视个数，不执行效果。

			//处理分页
			if( navObjSize==0 )navObjSize=conBoxSize;
			if( opts.autoPage ){
				var tempS = conBoxSize-opts.vis;
				navObjSize=1+parseInt(tempS%opts.scroll!=0?(tempS/opts.scroll+1):(tempS/opts.scroll)); 
				navObj.html(""); 
				for( var i=0; i<navObjSize; i++ ){ navObj.append("<li>"+(i+1)+"</li>") }
				var navObj = $("li", navObj);//重置导航子元素对象
			}

			conBox.children().each(function(){ //取最大值
				if( $(this).width()>selfW ){ selfW=$(this).width(); slideW=$(this).outerWidth(true);  }
				if( $(this).height()>selfH ){ selfH=$(this).height(); slideH=$(this).outerHeight(true);  }
			});

			switch(opts.effect)
			{
				case "top": conBox.wrap('<div class="tempWrap" style="overflow:hidden;  position:relative; height:'+opts.vis*slideH+'px"></div>').css( { "position":"relative","padding":"0","margin":"0"}).children().css( {"height":selfH} ); break;
				case "left": conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+opts.vis*slideW+'px"></div>').css( { "width":conBoxSize*slideW,"position":"relative","overflow":"hidden","padding":"0","margin":"0"}).children().css( {"float":"left","width":selfW} ); break;
				case "leftLoop":
				case "leftMarquee":
					conBox.children().clone().appendTo(conBox).clone().prependTo(conBox); 
					conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+opts.vis*slideW+'px"></div>').css( { "width":conBoxSize*slideW*3,"position":"relative","overflow":"hidden","padding":"0","margin":"0","left":-conBoxSize*slideW}).children().css( {"float":"left","width":selfW}  ); break;
				case "topLoop":
				case "topMarquee":
					conBox.children().clone().appendTo(conBox).clone().prependTo(conBox); 
					conBox.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+opts.vis*slideH+'px"></div>').css( { "height":conBoxSize*slideH*3,"position":"relative","padding":"0","margin":"0","top":-conBoxSize*slideH}).children().css( {"height":selfH} ); break;
			}

			//效果函数
			var doPlay=function(){
				switch(opts.effect)
				{
					case "fade": case "top": case "left": if ( index >= navObjSize) { index = 0; } else if( index < 0) { index = navObjSize-1; } break;
					case "leftMarquee":case "topMarquee": if ( index>= 2) { index=1; } else if( index<0) { index = 0; } break;
					case "leftLoop": case "topLoop":
						var tempNum = index - oldIndex; 
						if( navObjSize>2 && tempNum==-(navObjSize-1) ) tempNum=1;
						if( navObjSize>2 && tempNum==(navObjSize-1) ) tempNum=-1;
						var scrollNum = Math.abs( tempNum*opts.scroll );
						if ( index >= navObjSize) { index = 0; } else if( index < 0) { index = navObjSize-1; }
					break;
				}
				switch (opts.effect)
				{
					case "fade":conBox.children().stop(true,true).eq(index).fadeIn(opts.delayTime).siblings().hide();break;
					case "top":conBox.stop(true,true).animate({"top":-index*opts.scroll*slideH},opts.delayTime);break;
					case "left":conBox.stop(true,true).animate({"left":-index*opts.scroll*slideW},opts.delayTime);break;
					case "leftLoop":
						if(tempNum<0 ){
								conBox.stop(true,true).animate({"left":-(conBoxSize-scrollNum )*slideW},opts.delayTime,function(){
								for(var i=0;i<scrollNum;i++){ conBox.children().last().prependTo(conBox); }
								conBox.css("left",-conBoxSize*slideW);
							});
						}
						else{
							conBox.stop(true,true).animate({"left":-( conBoxSize + scrollNum)*slideW},opts.delayTime,function(){
								for(var i=0;i<scrollNum;i++){ conBox.children().first().appendTo(conBox); }
								conBox.css("left",-conBoxSize*slideW);
							});
						}break;// leftLoop end

					case "topLoop":
						if(tempNum<0 ){
								conBox.stop(true,true).animate({"top":-(conBoxSize-scrollNum )*slideH},opts.delayTime,function(){
								for(var i=0;i<scrollNum;i++){ conBox.children().last().prependTo(conBox); }
								conBox.css("top",-conBoxSize*slideH);
							});
						}
						else{
							conBox.stop(true,true).animate({"top":-( conBoxSize + scrollNum)*slideH},opts.delayTime,function(){
								for(var i=0;i<scrollNum;i++){ conBox.children().first().appendTo(conBox); }
								conBox.css("top",-conBoxSize*slideH);
							});
						}break;//topLoop end

					case "leftMarquee":
						var tempLeft = conBox.css("left").replace("px",""); 

						if(index==0 ){
								conBox.animate({"left":++tempLeft},0,function(){
									if( conBox.css("left").replace("px","")>= 0){ for(var i=0;i<conBoxSize;i++){ conBox.children().last().prependTo(conBox); }conBox.css("left",-conBoxSize*slideW);}
								});
						}
						else{
								conBox.animate({"left":--tempLeft},0,function(){
									if(  conBox.css("left").replace("px","")<= -conBoxSize*slideW*2){ for(var i=0;i<conBoxSize;i++){ conBox.children().first().appendTo(conBox); }conBox.css("left",-conBoxSize*slideW);}
								});
						}break;// leftMarquee end

						case "topMarquee":
						var tempTop = conBox.css("top").replace("px",""); 
							if(index==0 ){
									conBox.animate({"top":++tempTop},0,function(){
										if( conBox.css("top").replace("px","") >= 0){ for(var i=0;i<conBoxSize;i++){ conBox.children().last().prependTo(conBox); }conBox.css("top",-conBoxSize*slideH);}
									});
							}
							else{
									conBox.animate({"top":--tempTop},0,function(){
										if( conBox.css("top").replace("px","")<= -conBoxSize*slideH*2){ for(var i=0;i<conBoxSize;i++){ conBox.children().first().appendTo(conBox); }conBox.css("top",-conBoxSize*slideH);}
									});
							}break;// topMarquee end


				}//switch end
					navObj.removeClass(opts.titOnClassName).eq(index).addClass(opts.titOnClassName);
					oldIndex=index;
			};
			//初始化执行
			doPlay();

			//自动播放
			if (autoPlay) {
				if(opts.mousestop==0){
					if( opts.effect=="leftMarquee" || opts.effect=="topMarquee"  ){
						index++; inter = setInterval(doPlay, opts.interTime);
						conBox.hover(function(){if(autoPlay){clearInterval(inter);inter = setInterval(doPlay, opts.interTime);}});
					}else{
						 inter=setInterval(function(){index++; doPlay() }, opts.interTime); 
						$(this).hover(function(){if(autoPlay){clearInterval(inter); inter=setInterval(function(){index++; doPlay() }, opts.interTime); }});
					}
				}else{
					
					if( opts.effect=="leftMarquee" || opts.effect=="topMarquee"  ){
						index++; inter = setInterval(doPlay, opts.interTime);
						conBox.hover(function(){if(autoPlay){clearInterval(inter);}},function(){if(autoPlay){clearInterval(inter);inter = setInterval(doPlay, opts.interTime);}});
					}else{
						 inter=setInterval(function(){index++; doPlay() }, opts.interTime); 
						$(this).hover(function(){if(autoPlay){clearInterval(inter); }},function(){if(autoPlay){clearInterval(inter); inter=setInterval(function(){index++; doPlay() }, opts.interTime); }});
					}
					
					}
			}

			//鼠标事件
			var mst;
			if(opts.trigger=="mouseover"){
				navObj.hover(function(){ clearTimeout(mst); index=navObj.index(this); mst = window.setTimeout(doPlay,200); }, function(){ if(!mst)clearTimeout(mst); });
			}else{ navObj.click(function(){index=navObj.index(this);  doPlay(); })  }
			nextBtn.click(function(){ index++; doPlay(); });
			prevBtn.click(function(){  index--; doPlay(); });

    	});//each End

	};//slide End

})(jQuery);
/*
/--使用方法：--/
<script type="text/javascript">jQuery(".banner").slide({ mainCell:".banList ul",effect:"leftLoop",vis:1,scroll:1,autoPlay:true});</script>*/
///////////////////////////////////////////////////////////////////////////////////////