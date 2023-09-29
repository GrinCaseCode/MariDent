$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
  if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
    $menu.removeClass("default").addClass("fixed");
  } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
    $menu.removeClass("fixed").addClass("default");
  }
  
});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
  $menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
  $menu.removeClass("fixed").addClass("default");
}


{
  if ($(window).width() < 992) { 

    $('.location').click(function() {
      $('html').animate({ 
        scrollTop: $("#map").offset().top - 60
      }, 1000 
      );
    }); 
  }
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn-menu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		if ($(".menu-dropdown").is(":hidden")) {
			$(".menu-dropdown").slideDown(200);
      $(".header").addClass("active");
    } else {
     $(".menu-dropdown").slideUp(200);
     $(".header").removeClass("active");
   }
 });


  $("*[data-video-id]").modalVideo();

	//слайдер

	var rev = $('.slider-billbord');
  rev.on('init', function(event, slick, currentSlide) {
    var
    cur = $(slick.$slides[slick.currentSlide]),
    next = cur.next(),
    next2 = cur.next().next(),
    prev = cur.prev(),
    prev2 = cur.prev().prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');  
    prev2.addClass('slick-sprev2');
    next2.addClass('slick-snext2');  
    cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
    slick.$prev = prev;
    slick.$next = next;
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
    cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    slick.$prev.prev().removeClass('slick-sprev2');
    slick.$next.next().removeClass('slick-snext2');
    next = cur.next();
    prev = cur.prev();
  //prev2.prev().prev();
  //next2.next().next();
  prev.addClass('slick-sprev');
  next.addClass('slick-snext');
  prev.prev().addClass('slick-sprev2');
  next.next().addClass('slick-snext2');
  slick.$prev = prev;
  slick.$next = next;
  cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
});

  rev.slick({
    speed: 1000,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="far fa-arrow-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="far fa-arrow-right"></i><div/>',
    infinite: true,
    centerMode: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    swipe: true,
    customPaging: function(slider, i) {
      return '';
    },
  });

  $('.slider-issues').slick({
    arrows: true,
    dots: false,
    infinite: true,
    touchThreshold: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        dots: true,
      }
    }
    ]
  });

  $('.slider-team').slick({
    arrows: true,
    dots: false,
    infinite: true,
    touchThreshold: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
       slidesToShow: 3,
       slidesToScroll: 2,
       arrows: false,
       dots: true,
     }
   },
    {
      breakpoint: 768,
      settings: {
       slidesToShow: 2,
       slidesToScroll: 2,
       arrows: false,
       dots: true,
     }
   }
   ]
 });

  $('.slider-clinic').slick({
    arrows: true,
    dots: false,
    infinite: true,
    touchThreshold: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
  });

  $('.slider-promotion').slick({
    arrows: true,
    dots: false,
    infinite: true,
    touchThreshold: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
       slidesToShow: 1,
       arrows: false,
       dots: true,
     }
   }
   ]
 });

  $('.slider-reviews').slick({
    arrows: true,
    dots: false,
    infinite: true,
    touchThreshold: 1000,
    swipe: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $('.item-review__slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    touchThreshold: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
  });

  $('.slider-documents').slick({
    arrows: true,
    dots: false,
    infinite: true,
    touchThreshold: 1000,
    rows: 2,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
    nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
       rows: 1,
       slidesToShow: 3,
       slidesToScroll: 2,
       arrows: false,
       dots: true,
     }
   },
   {
      breakpoint: 768,
      settings: {
       rows: 1,
       slidesToShow: 2,
       slidesToScroll: 2,
       arrows: false,
       dots: true,
     }
   }
   ]
 });

  $(".block-clinic__head").click(function() {
    $(this).parent().parent().parent().parent().find(".item-clinic__content").slideToggle(200);
    $(this).parent().parent().parent().parent().find('.slider-clinic').slick('setPosition');
    $(this).parent().parent().parent().parent().toggleClass("active");
  });

  $(".item-sidebar__head").click(function() {
    $(this).siblings(".item-sidebar__content").slideToggle(200);
    $(this).parent().toggleClass("active");
    $(this).parent().siblings(".item-sidebar").removeClass("active");
    $(this).parent().siblings(".item-sidebar").find(".item-sidebar__content").slideUp(200);
  });

  $(".item-question__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-question").removeClass("active");
    $(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
  });

   $(".dropdown-category__head").click(function() {
    $(this).siblings(".dropdown-category__content").slideToggle(200);
    $(this).parent().toggleClass("active");
  });

  $('.tabs li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents().find(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
    $(this).parent().parent().siblings().find(".slider-clinic").slick('refresh');
  }); 

  $('.tabs-page li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents().find(".tab-pane-page").fadeOut(0);
    var selectTab2 = $(this).attr("href");
    $(selectTab2).fadeIn(200);
  }); 

   $('.nav-service_tabs li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(this).parents().find(".tab-pane-service").fadeOut(0);
    var selectTab3 = $(this).attr("href");
    $(selectTab3).fadeIn(200);
  }); 

  $(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

