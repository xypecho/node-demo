//如果是ie8及更低版本，提示
    var DEFAULT_VERSION = "8.0";
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie")>-1;
    var safariVersion;
    if(isIE){
        safariVersion =  ua.match(/msie ([\d.]+)/)[1];
        if(safariVersion <= DEFAULT_VERSION ){
        	alert("请升级您的浏览器，您在使用的浏览器太旧了，请选择IE9及以上浏览器浏览本页！");
            // jQuery("#loginerror").html("您浏览器版本过低，请先更新浏览器！");
        }
    }

    $(function(){
		$('#owl-demo').owlCarousel({
			items: 1,
			autoPlay: 3000,
			autoHeight: true,
			transitionStyle: 'fade'
		});
	});


    $(function(){

		$('.nav-wrap .nav-ul .navlist').hover(function() {
			$(this).find('.listh1').addClass('on');
			$(this).find('.list2-ul').css('display', 'block'); 
		}, function() {
			$(this).find('.listh1').removeClass('on');
			$(this).find('.list2-ul').css('display', 'none'); 
		});
		 $('.list2-ul .list').hover(function() {
		 	$(this).find('.listh2').addClass('on');
		 	$(this).find('.list3-ul').css('display', 'block');
		 }, function() {
		 	$(this).find('.listh2').removeClass('on');
		 	$(this).find('.list3-ul').css('display', 'none');
		 });

		$(".header-wrap .menu").click(function(){
		  $(".menulist").slideToggle();
		});


		var swiper = new Swiper('.banner .swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        paginationClickable: true,
	        spaceBetween: 30,
	        centeredSlides: true,
	        autoplay: 2500,
	        autoplayDisableOnInteraction: false
	    });

	    $(".content-wrap .contentbox .ltside .link-wrap .list").click(function(){
	    	if($(this).hasClass('on1')){
	    		$(this).removeClass('on1').addClass('on');
	    		$(this).css({color: '#252525'});
	    	}else{
	    		$(this).removeClass('on').addClass('on1');
	    		$(this).css({color: '#fff'});
	    	}
			$(this).next(".contentbox .list2").slideToggle(500);
		});

		$(".product-wrap .ltside .link-wrap .list").click(function(){
			if($(this).hasClass('on1')){
				$(this).removeClass('on1').addClass('on');
				$(this).css({color: '#252525'});
			}else{
				$(this).removeClass('on').addClass('on1');
				$(this).css({color: '#252525'});
			}
			$(this).next(".product-wrap .list2").slideToggle(500);
		});


	    $(".tit-show").click(function () {
	        $(this).next("div").slideToggle("slow").siblings(".div1:visible").slideUp("slow");
	    });

	    $(".div2").click(function () {
	        $(this).next("div").slideToggle("slow").siblings(".div3:visible").slideUp("slow");
	    });


		var swiper = new Swiper('.product-wrap .swiper-container', {
			pagination: '.swiper-pagination',
			slidesPerView: 3,
			slidesPerColumn: 2,
			paginationClickable: true,
			spaceBetween: 30,
			autoplay: 2500,
			autoplayDisableOnInteraction: false
		});


		jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});

		jQuery(".case-wrap .picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:4,interTime:50, prevCell:".prev2", nextCell:".next2"});


		$(".product-wrap .tabhd .thdlist a:first").addClass('on');
		$(".product-wrap .tabhd .thdlist").hover(function(){
			$(this).find('a').addClass('on');
			$(this).siblings().find('a').removeClass('on');
			var index = $(this).index();
			$('.product-wrap .tbdlist').eq(index).show().siblings().hide();
		});

		jQuery(".product-wrap .picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:4,interTime:50, prevCell:".prev3", nextCell:".next3"});


    })

$(function(){

	function aaa (){
		var imgs = $(".imgs").width();
		$(".imgs").css({"height":imgs *1+"px","line-height":imgs*1+"px"})
	};
	aaa();
	$(window).resize(function(){
		aaa();
	});



	function eee (){
		var imgs = $(".imgss").width();
		$(".imgss").css({"height":imgs *1+"px","line-height":imgs*1+"px"})
	};
	eee();
	$(window).resize(function(){
		eee();
	});

})