$(window).resize(function(){$(window).width()<990?$("#border.about").show():$("#border.about").hide()}).resize();var sections=$("section"),nav=$("nav"),nav_height=nav.outerHeight();$(window).on("scroll",function(){var o=$(this).scrollTop()+1;sections.each(function(){var t=$(this).offset().top-nav_height,n=t+$(this).outerHeight();o>=t&&o<=n&&(nav.find("a").removeClass("active"),sections.removeClass("active"),$(this).addClass("active"),nav.find('a[href="#'+$(this).attr("id")+'"]').addClass("active"))})}),nav.find("a").on("click touchstart",function(){var o=$(this),t=o.attr("href");return $("html, body").animate({scrollTop:$(t).offset().top-nav_height},500),!1}),$(window).scroll(function(o){var t=$(this).scrollTop(),n=$(".top-wrapper").offset().top;n<=t&&($(".top-text").hide("slow"),$("#button-top").hide("slow")),t<n&&($(".top-text").show("slow"),$("#button-top").show("slow")),t>=600&&($(".nav-bar").css("background","rgb(250, 250, 250)"),$(".nav-bar").css("box-shadow","0px 2px 8px  #888888"),$("nav a").css("color","#FDCD3B")),t<600&&($(".nav-bar").css("background","none"),$(".nav-bar").css("box-shadow","none"),$("nav a").css("color","white"))}),$("body").on("click",".pointer-wrap a",function(){$("html, body").animate({scrollTop:$(".container").offset().top},700)}),$("body").on("click",".pointer-wrap svg",function(){$("html, body").animate({scrollTop:$(".container").offset().top-50},700)});var email=$("email-wrap h1").position();$("body").on("click touchstart","#button-top h4",function(){$("html, body").animate({scrollTop:$(".email-wrap").offset().top+50},700)}),$("body").on("click touchstart",".work",function(){$("html, body").animate({scrollTop:$(".work-container").offset().top},700)}),$("body").on("click touchstart",".about",function(){$("html, body").animate({scrollTop:$(".about-wrapper").offset().top},700)}),$("body").on("click touchstart",".cont",function(){$("html, body").animate({scrollTop:$(".email-wrap").offset().top},700)}),$("body").on("click",".btn",function(){$("body").css("overflow-y","hidden"),$("body").css("overflow-x","hidden")}).on("click",".cd-modal-close",function(){$("body").css("overflow-x","visible"),$("body").css("overflow-y","visible")}),$("body").on("keyup",function(o){27==o.which&&($("body").css("overflow-y","visible"),$("body").css("overflow-x","visible"))});